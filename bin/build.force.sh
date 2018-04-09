#!/bin/bash
cd ~/gitrepo/LMS
isUpdate=$(git pull)
echo $isUpdate
ng build --prod
cp -r ~/gitrepo/LMS/dist/* /var/www/html/
# echo "up-to-date"
