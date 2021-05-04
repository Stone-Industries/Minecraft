Function New-ModpackManifest{
    [Cmdletbinding()]
    Param(
        [Parameter(Mandatory = $true)]
        [Version]$MinecraftVersion,
        [Parameter(Mandatory = $true)]
        [Version]$ForgeVersion,
        [Parameter(Mandatory = $true)]
        [String]$ModpackName,
        [Parameter(Mandatory = $true)]
        [String]$ModpackAuthor,
        [Parameter(Mandatory = $true)]
        [Version]$ModpackVersion,
        [Parameter(Mandatory = $true)]
        [String]$ModListPath,
        [Parameter(Mandatory = $true)]
        [String]$OutputLocation
    )
    Begin{
        Try{
            #Import from location provided by caller
            $ModList = Import-CSV $ModListPath
        }
        Catch{
            Write-Warning "Could not import mod list from location $ModListPath, aborting execution." -WarningAction Stop
        }

        #Build base manifest from input provided by caller
        $Manifest = [Ordered]@{
            "minecraft" = @{"version" = "$($MinecraftVersion.ToString())";
                "modLoaders" = @(
                    [Ordered]@{
                        "id" = "forge-$($ForgeVersion.ToString())";
                        "primary" = $true
                    }
                )
            };
            "manifestType" = "minecraftModpack";
            "manifestVersion" = 1;
            "name" = "$ModpackName";
            "version" = "$($ModpackVersion.ToString())";
            "author" = "$ModpackAuthor";
            "files" = [System.Collections.ArrayList]@();
            "overrides" = "overrides";
        }

        $BaseURI = "https://api.cfwidget.com"

        #Created as ArrayList so .add method works.
        $ModFiles = [System.Collections.ArrayList]@() 
    }
    Process{
        Foreach($Mod in $ModList){
            #Clear variable so it is never re-used loop over loop
            Remove-Variable -Name FileID -Force -ErrorAction SilentlyContinue

            Write-Host "Processing Mod: $($Mod.JarName)"
            Try{
                $REST = Invoke-RestMethod -Method Get -Uri "$BaseURI/$($Mod.ProjectID)" -UserAgent "PowerShell" -ContentType application/json
            }
            Catch{
                #Return error message from Invoke-RestMethod and give friendly message as well.
                Write-Warning $Error[0]
                Write-Warning "REST API Call to $BaseURI failed for mod $($Mod.JarName) with projectid $($Mod.ProjectID)." -WarningAction Stop
            }

            #Must handle spark-forge separately because that mod author decided to name all forge versions of the jar "spark-forge.jar"...thanks mod author!
            If("$($Mod.JarName)" -eq "spark-forge"){
                $File = $REST.files | Where-Object -FilterScript { ($PSItem.display -eq "$($Mod.Version) (Forge $MinecraftVersion)") }
            }
            ElseIf("$($Mod.JarName)" -eq "BotanyPots"){
                $File = $REST.files | Where-Object -FilterScript { ($PSItem.name -eq "$($Mod.JarName)-$($Mod.Version).jar") }
            }
            else{
                $File = $REST.files | Where-Object -FilterScript { (($PSItem.name -like "$($Mod.JarName)*") -and ($PSItem.name -like "*$($Mod.Version)*")) }
            }

            #Handle for file either being null or returning more than one file id
            If($Null -eq $File){
                Write-Warning "Could not determine curseforge file id based on return from $BaseURI for mod $($Mod.JarName) with version $($Mod.Version)" -WarningAction Stop
            }
            Elseif($File.count -gt 1){
                Write-Warning "Multiple file IDs returned for mod $($Mod.JarName) with version $($Mod.Version), attempting to handle"

                Foreach($ReturnedVersion in $File){
                    #Check for exact JAR name
                    if($ReturnedVersion.name -eq "$($Mod.JarName)-$($Mod.Version).jar"){
                        $FileID = $ReturnedVersion.ID
                    }
                }
                
                If($Null -eq $FileID){
                    Write-Warning "Failed to handle multiple mod IDs [$($File.id)] for mod $($Mod.JarName) with version $($Mod.Version). Code changes may be requried to handle this mod." -WarningAction Stop
                }
            }
            else{
                $FileID = $File.id
            }

            [Int]$ProjectID = $Mod.ProjectID

            #Build hashtable containing information about this mod
            $ModInfo = [Ordered]@{
                    "projectID"= $ProjectID;
                    "fileID"= $FileID;
                    "required"= $true;
            }

            #Must out-null or it outputs the number of the array index that was inserted
            $ModFiles.add($ModInfo) | Out-Null
        }

        #Update manifest with mod information
        $Manifest["files"] = $ModFiles

        #Convert manifest to JSON and output to location provided by caller
        $Manifest | ConvertTo-Json -Depth 99 | Format-Json -Indentation 2 | Out-File -FilePath $OutputLocation
    }
}