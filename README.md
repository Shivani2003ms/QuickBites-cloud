# QuickBites – Restaurant Ordering System

QuickBites is a cloud-based food ordering system where users can browse a menu, add items to their cart, and place orders in real time.

## 🚀 Features
- Dynamic menu fetched from backend API
- Categorized food items (Pizzas, Burgers, Desserts, etc.)
- Real-time order placement with cart functionality
- Scalable backend deployed on AWS EC2 (ASG + ALB)
- Persistent database using AWS RDS
- Custom domain via AWS Route 53

## 💻 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python Flask
- Database: AWS RDS (Postgres/MySQL)
- Deployment: AWS EC2, ALB, ASG, Route53
- Docker for containerization

## ⚡ Installation (Local Development)
1. Clone the repo:  
   `git clone https://github.com/Shivani2003ms/QuickBites.git`
2. Set up virtualenv and install dependencies in backend:  
   ```bash
   cd backend
   pip install -r requirements.txt
