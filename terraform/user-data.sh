#!/bin/bash
yum update -y
yum install docker -y

systemctl start docker
systemctl enable docker

usermod -aG docker ec2-user

docker pull nithiyab12/calculator-app
docker run -d -p 3000:3000 nithiyab12/calculator-app