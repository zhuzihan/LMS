#!/bin/bash
cd ~/gitrepo/LMS
isUpdate=$(git pull)
echo $isUpdate
if [ "$isUpdate" == "Already up-to-date." ]; then
    echo "up-to-date"
else
    ng build --prod
    rm -rf /var/www/html/*
    cp -r ~/gitrepo/LMS/dist/* /var/www/html/
    # echo "up-to-date"
fi
