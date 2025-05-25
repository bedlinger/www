# Make the script executable: chmod +x /bedlinger/scripts/update_script.sh

# use `crontab -e` to add this script to the cron jobs with the following line:
# 5 1 * * 0 /bedlinger/scripts/update_script.sh >> /var/log/cron_portfolio_update.log 2>&1
# This will run the script every Sunday at 01:30 AM and log output to /var/log/cron_portfolio_update.log

#!/bin/bash

echo "--- Starting portfolio update at $(date) ---"

cd /bedlinger/deployments/www || { echo "Failed to cd into project directory"; exit 1; }

echo "Pulling latest changes from git..."
git pull origin main

echo "Rebuilding and restarting Docker container..."
docker-compose -f docker-compose.app.yml up -d --build

echo "--- Portfolio update finished at $(date) ---"