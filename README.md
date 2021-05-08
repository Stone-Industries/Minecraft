# **Stone Industries**
This Minecraft modpack is being put together by the team at [Stone Industries](https://discord.gg/VrgmsNJUmq). Please join us on our discord server to learn more!

# **Project Status**
We are currently in very early development and are working towards ensuring all mods we have selected are compatible and trying to establish a balanced play experience.

# **Azure Boards**
View our work in progress on Azure Boards:

**Epics**:

[![Board Status](https://dev.azure.com/SandboxServers/ccebe52c-6200-4e49-ae18-5217b565db46/838ef962-f749-478b-b2ab-61f86f3765b3/_apis/work/boardbadge/d5cf8915-7453-4511-8b98-6794d39867bf?columnOptions=1)](https://dev.azure.com/SandboxServers/ccebe52c-6200-4e49-ae18-5217b565db46/_boards/board/t/838ef962-f749-478b-b2ab-61f86f3765b3/Microsoft.EpicCategory/)

**Features**:

[![Board Status](https://dev.azure.com/SandboxServers/ccebe52c-6200-4e49-ae18-5217b565db46/838ef962-f749-478b-b2ab-61f86f3765b3/_apis/work/boardbadge/58f8074a-5b9c-4d0e-bac0-ed4b19a7669c?columnOptions=1)](https://dev.azure.com/SandboxServers/ccebe52c-6200-4e49-ae18-5217b565db46/_boards/board/t/838ef962-f749-478b-b2ab-61f86f3765b3/Microsoft.FeatureCategory/)

**User Stories**:

[![Board Status](https://dev.azure.com/SandboxServers/ccebe52c-6200-4e49-ae18-5217b565db46/838ef962-f749-478b-b2ab-61f86f3765b3/_apis/work/boardbadge/8efc6553-73b9-47d7-a263-5aaf4aba891c?columnOptions=1)](https://dev.azure.com/SandboxServers/ccebe52c-6200-4e49-ae18-5217b565db46/_boards/board/t/838ef962-f749-478b-b2ab-61f86f3765b3/Microsoft.RequirementCategory/)

# **Azure Pipelines**
View our up-to-date progress on Build and Release using Azure Pipelines:
## **Build**
| Step           | Client         | Server         |
| -------------- | -------------- | -------------- |
| Stage        | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Build%20and%20Package%20Client)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Build%20and%20Package%20Client)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement) |  | |
| Build and Package | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Build%20and%20Package%20Client&jobName=Build%20and%20Package%20client)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Build%20and%20Package%20Server&jobName=Build%20and%20Package%20server)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)|
| Push to Github | Pushed with Server | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Build%20and%20Package%20Server&jobName=Push%20to%20GitHub)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  |

## **Release**

| Step           | Dev            | Staging        | Prod           | 
| -------------- | -------------- | -------------- | -------------- |
| Stage        | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Dev)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Staging)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement) | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=prod)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  |  | |
| Deploy to Server  | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Dev&jobName=Deploy%20to%20%20Instance)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Staging&jobName=Deploy%20to%20%20Instance)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement) | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=prod&jobName=Deploy%20to%20%20Instance)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement) |
| PR on GitHub|[![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Dev&jobName=Pull%20Request%20to%20staging)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)    | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Staging&jobName=Pull%20Request%20to%20main)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement) | N/A |
| (Pre)(R)elease on GitHub | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Dev&jobName=createrelease)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement)  | [![Build Status](https://dev.azure.com/SandboxServers/StoneIndustries/_apis/build/status/StoneIndustries?branchName=users%2Fscady%2Fpipeline-refinement&stageName=Staging&jobName=createrelease)](https://dev.azure.com/SandboxServers/StoneIndustries/_build/latest?definitionId=2&branchName=users%2Fscady%2Fpipeline-refinement) | N/A |

# **Mods Included**
These mod names will become hyper-links to their CurseForge page at some point!

We welcome suggestions for mods. Please file a GitHub issue with a link to the mod on CurseForge.

## **Magic**
- Apotheosis
- Blood Magic
- Botania [+ Mythic Botany]
- EvilCraft
- Mystical Agriculture

## **Tech**
- Alchemistry
- CompactMachines
- Mekanism [+ Additions, Generators, Tools]
- Pipez
- PneumaticCraft - Repressurized
- Powah 
- Refined Storage [+ RSRequestify, ExtraDisks/ExtraStorage]

## **Game Utilities**
- AppleSkin
- Architect's Palette
- Architectury
- Dank Storage
- Ding
- FramedBlocks
- [Hwyla] Here's What You're Looking At
- Inventory Tweaks
- IronChests
- Just Enough Items
- MouseTweaks
- RSGauges
- Toast Control
- Torchmaster
- Toro Health
- Trash Cans
- Variant16x
- Waystones

## **Mechanics**
- Curios
- Cyclic
- Economy, Inc.
- FTB - Chunks
- FTB - Essentials
- FTB - Teams
- Pam's HarvestCraft 2 - Crops
- Swing Through Grass
- Tombstone


## **Content**
- BetterEnd
- BetterMineshafts
- BetterStrongholds
- Biomes O' Plenty
- Oh the Biomes You'll Go
- Dungeons Arise
- Ice and Fire
- Industrial Agriculture
- Infernal Expansion
- Quark [+ Quark O' Plenty]
- Undefeatables
- Voyage
- Whisperwoods

## **Other Utilities**
- AI Improvements
- Better Animals Plus
- Dynmap (Server Only)
- DynView Distance
- Extreme Sound Muffler
- Fancy Menu
- FastFurnace
- FastLeafDecay
- FastWorkbench
- Spark
- WorldEdit (Server Only)

## **Dependencies**
- Abnormals Core
- ALib
- AutoRegLib
- Bookshelf
- ChemLib
- Citadel
- CoFH Core
- Cucumber
- Cyclops Core
- FTB - Gui Library
- FTB - Ranks
- GameStages
- JEI - Progressions
- JEI Integration
- Just Enough Resources
- Konkrete
- KubeJS
- LibX
- Lollipop
- MixinBootstrap
- Mystical Agradditions
- PamHC2 Food Core
- Patchouli
- Placebo
- Polymorph
- RandomPatches
- ReAuth
- Rhino
- Shutupexperimentalsettings
- Yung's API
