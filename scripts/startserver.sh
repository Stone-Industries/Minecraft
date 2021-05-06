#!/bin/bash

# Function to mount the ramdisk corretly in the server.
function mount_ramdisk {
  echo "  ██████╗  █████╗ ███╗   ███╗██████╗ ██╗███████╗██╗  ██╗"
  echo "  ██╔══██╗██╔══██╗████╗ ████║██╔══██╗██║██╔════╝██║ ██╔╝"
  echo "  ██████╔╝███████║██╔████╔██║██║  ██║██║███████╗█████╔╝"
  echo "  ██╔══██╗██╔══██║██║╚██╔╝██║██║  ██║██║╚════██║██╔═██╗"
  echo "  ██║  ██║██║  ██║██║ ╚═╝ ██║██████╔╝██║███████║██║  ██╗"
  echo "  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝"

  DESTINATION_MOUNT="/home/worlds/${P_SERVER_UUID}"

  echo "[+] Starting the process of mounting the ramdisk..."

  if [ ! -d ${DESTINATION_MOUNT} ]; then
    echo "[+] Was not able to detect a world at ${DESTINATION_MOUNT}, creating..."
    mkdir ${DESTINATION_MOUNT}
  fi

  if [ -L "/home/container/world" ]; then
    echo "[+] The world symlink is already created."
  else
    echo "[+] Creating the symlink..."
    ln -s ${DESTINATION_MOUNT} /home/container/world
  fi
  echo -ne "\r\n\r\n=================================================================================\r\n"
}

# Load the ramdisk with content from the world.
function load_ramdisk {
  echo "  ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ ██╗      ██████╗  █████╗ ██████╗"
  echo "  ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗██║     ██╔═══██╗██╔══██╗██╔══██╗"
  echo "  ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║██║     ██║   ██║███████║██║  ██║"
  echo "  ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║██║     ██║   ██║██╔══██║██║  ██║"
  echo "  ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝███████╗╚██████╔╝██║  ██║██████╔╝"
  echo "   ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝"

  if [ -f "/home/container/world/ramdisk.loaded" ]; then
    echo "[+] World contents have already been copied to the ramdisk..."
  else
    echo "[+] Copying files from world_backup to the ramdisk world..."
    cp -a /home/container/world_backup/* /home/container/world/
    touch /home/container/world/ramdisk.loaded
  fi
  echo -ne "\r\n\r\n=================================================================================\r\n"
}

# Copy the world from the ramdisk back to the regular disk.
function unload_ramdisk {
  echo "  ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ ███████╗ █████╗ ██╗   ██╗███████╗"
  echo "  ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝"
  echo "  ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║███████╗███████║██║   ██║█████╗"
  echo "  ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║╚════██║██╔══██║╚██╗ ██╔╝██╔══╝"
  echo "  ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝███████║██║  ██║ ╚████╔╝ ███████╗"
  echo "   ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝"
  echo "[+] Ramdisk is no longer in use, write back changes."
  cp -ar /home/container/world/* /home/container/world_backup/
  echo "[+] Changes are now written back to /home/container/world_backup"
  echo -ne "\r\n\r\n=================================================================================\r\n"
}

# Start the server using the serverstarter.jar file.
function run_server {
  echo "  ██████╗ ██╗   ██╗███╗   ██╗███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗"
  echo "  ██╔══██╗██║   ██║████╗  ██║██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗"
  echo "  ██████╔╝██║   ██║██╔██╗ ██║███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝"
  echo "  ██╔══██╗██║   ██║██║╚██╗██║╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗"
  echo "  ██║  ██║╚██████╔╝██║ ╚████║███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║"
  echo "  ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝"
  if [ -f "forge-1.16.5-36.1.2.jar" ]; then
    echo "[+] Starting the server using serverstarter.jar"
    java -jar serverstarter-2.0.1.jar
    #java -Xms10G -Xmx10G -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar forge-1.16.5-36.1.2.jar nogui    

    return $?
  fi
  echo -ne "\r\n\r\n=================================================================================\r\n"
  download_serverstart_jar
  run_server
}

# Download the serverstarter.jar file using wget.
function download_serverstart_jar {
  echo "  ██████╗  ██████╗ ██╗    ██╗███╗   ██╗██╗      ██████╗  █████╗ ██████╗"
  echo "  ██╔══██╗██╔═══██╗██║    ██║████╗  ██║██║     ██╔═══██╗██╔══██╗██╔══██╗"
  echo "  ██║  ██║██║   ██║██║ █╗ ██║██╔██╗ ██║██║     ██║   ██║███████║██║  ██║"
  echo "  ██║  ██║██║   ██║██║███╗██║██║╚██╗██║██║     ██║   ██║██╔══██║██║  ██║"
  echo "  ██████╔╝╚██████╔╝╚███╔███╔╝██║ ╚████║███████╗╚██████╔╝██║  ██║██████╔╝"
  echo "  ╚═════╝  ╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝"
  wget -O serverstarter-2.0.1.jar "https://github.com/AllTheMods/alltheservers/releases/download/2.0.1/serverstarter-2.0.1.jar"

  which wget >> /dev/null
  if [ $? -eq 0 ]; then
    echo "[+] Using wget to download serverstarter.jar..."
    wget -O serverstarter-2.0.1.jar "${URL}"
    return 0
  fi

  which curl >> /dev/null
  if [ $? -eq 0 ]; then
    echo "[+] Using curl to download serverstarter.jar..."
    curl -o serverstarter-2.0.1.jar "${URL}"
    return 0
  fi

  echo "[+] A suitable downloader (curl/wget) was not found to download serverstarter.jar"
  echo -ne "\r\n\r\n=================================================================================\r\n"

  exit 1
}

# Start the server.
#mount_ramdisk
#load_ramdisk
run_server

# Check for a crash, restart once.
if [ ! $? -eq 0 ]; then
  echo "[!] Crash detected, restarting server once!"
  run_server
fi

# Copy back the changes.
#unload_ramdisk

exit 0