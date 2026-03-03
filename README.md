🚀 Terraform + Docker Deployment on AWS EC2
📌 Project Overview

This project demonstrates end-to-end deployment of a Dockerized Node.js Calculator application on AWS EC2 using Terraform (Infrastructure as Code).

The objective of this project was to implement real-world DevOps workflow including:

Infrastructure provisioning using Terraform

AWS EC2 instance creation

Security group configuration

Docker containerization

Remote server deployment via SSH

Public application exposure

🏗️ Architecture Flow

Local Machine
⬇
Terraform
⬇
AWS EC2 (Ubuntu)
⬇
Docker Container
⬇
Node.js Calculator App
⬇
Public IP:3000 (Browser Access)

🛠️ Technologies Used

AWS EC2 (Ubuntu)

Terraform

Docker

Node.js

Git & GitHub

Linux (Ubuntu)

SSH

🚀 Deployment Steps
1️⃣ Infrastructure Provisioning

Created EC2 instance using Terraform

Configured Security Group to allow port 3000

Attached Key Pair for SSH access

Retrieved Public IP from Terraform output

Commands used:

terraform init
terraform apply
2️⃣ Docker Image Build

Created Dockerfile for Node.js application

Built Docker image

Exposed port 3000

Commands used:

docker build -t calculator .
docker run -d -p 3000:3000 calculator
3️⃣ Remote Deployment

Connected to EC2 via SSH

Installed Docker inside EC2

Built Docker image in server

Ran container in detached mode

Verified container using docker ps

🌐 Live Application

Application accessible using:

http://<EC2_PUBLIC_IP>:3000
📸 Screenshots

(Add your screenshots below after uploading them to GitHub)

📚 Key Learnings

Infrastructure as Code using Terraform

Cloud provisioning in AWS

Docker image lifecycle management

Linux server management

Security group configuration

Troubleshooting deployment issues

Real-world DevOps workflow implementation

🔮 Future Improvements

Add CI/CD using GitHub Actions

Attach Elastic IP

Configure Nginx Reverse Proxy

Enable HTTPS

Automate Docker deployment via Terraform

👩‍💻 Author

Nithiya Bharathi
Aspiring DevOps Engineer
