# ☁️ Cloud Setup for QuickBites

This guide contains all the **commands and steps** required to set up QuickBites on AWS cloud, including **VPC, subnets, security groups, RDS, EC2, ALB, and Route 53**.

---

## 1️⃣ VPC & Subnets

- Create **1 VPC**  
- Create **6 subnets**:
  - 2 Public → Web Servers
  - 2 Private → App Servers
  - 2 Private → Database

---

## 2️⃣ Route Tables

- **Public Route Table** → Attach to Internet Gateway → Associate with public subnets  
- **Private Route Table** → Attach NAT Gateway for private subnets (App Servers)  
- **DB Route Table** → Optional NAT Gateway for database patching  

---

## 3️⃣ Security Groups

- **WebServer-SG**: SSH, HTTP, HTTPS from anywhere  
- **AppServer-SG**: 5000, SSH, 80, 443 from WebServer-SG  
- **DB-SG**: 3306 from AppServer-SG  

> Optional: Create 5 SGs for better isolation  

---

## 4️⃣ Route 53 & ACM

1. Create Hosted Zone for your domain  
2. Map domain provider NameServers to Route 53  
3. Request ACM Certificate for HTTPS  
4. Validate ACM via CNAME in Route 53  

---

## 5️⃣ RDS Database Setup

**Database scripts:** `cloud-setup/commands.sql`

```sql
-- Example commands.sql
CREATE DATABASE quickbites;
USE quickbites;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    item VARCHAR(50),
    quantity INT,
    total FLOAT
);
