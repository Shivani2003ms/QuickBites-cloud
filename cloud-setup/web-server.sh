#!/bin/bash
sudo yum update -y
sudo yum install httpd -y
sudo service httpd start

# Setup frontend files
cd /var/www/html/
touch index.html script.js styles.css
# Copy your frontend files here
