#!/bin/bash

# Set the IP address of your Ubuntu server
SERVER_IP="13.214.115.241"

# Set the username of your Ubuntu server
SERVER_USERNAME="ubuntu"

# Set the project directory on your Ubuntu server
PROJECT_DIR="/home/ubuntu/upsc-dashboard/upsc-frontend"

# Set the local folder that you want to sync with the build folder on your Ubuntu server
LOCAL_FOLDER="build"

# Login to your Ubuntu server
ssh $SERVER_USERNAME@$SERVER_IP

# Go to the project directory on your Ubuntu server
cd $PROJECT_DIR

# Sync your local folder with the build folder on your Ubuntu server
rsync -avz $LOCAL_FOLDER/build/ $PROJECT_DIR/build/

# Restart the PM2 process
pm2 restart

# Exit your SSH session
exit