#!/bin/bash
sudo yum update -y
sudo yum install python3 python3-pip git -y

# Clone repo
git clone https://github.com/YOUR_USERNAME/QuickBites.git /home/ec2-user/QuickBites

cd /home/ec2-user/QuickBites/backend

# Install dependencies
pip3 install -r requirements.txt

# Run Flask app
nohup python3 app.py > output.log 2>&1 &

#login to app server
chmod 400 YOUR_KEY.pem
ssh -i YOUR_KEY.pem ec2-user@APP_SERVER_PRIVATE_IP

#verify if the app is running
ps -ef | grep app.py
cat output.log
curl http://APP_SERVER_PRIVATE_IP:5000/login
