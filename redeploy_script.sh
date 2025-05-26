#!/bin/bash

echo "--- Redeploy portfolio at $(date) ---"

cd /home/bedlinger/deployments/www || { echo "Failed to cd into project directory"; exit 1; }

echo "Pulling latest changes from git..."
git pull origin main

echo "Shutting down existing Docker container..."
docker-compose down
if [ $? -ne 0 ]; then
    echo "Failed to shut down Docker container. Exiting."
    exit 1
fi

echo "Rebuilding and restarting Docker container..."
docker-compose up -d --build

echo "--- Portfolio redeployment finished at $(date) ---"

# Make the script executable: chmod +x /path/to/redeploy_script.sh