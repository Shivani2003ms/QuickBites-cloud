from app import app
from models import db, MenuItem

with app.app_context():
    db.create_all()

    sample_items = [
        {'category': 'Pizzas', 'name': 'Margherita Pizza', 'price': 250, 'img_url': 'https://source.unsplash.com/featured/?pizza'},
        {'category': 'Burgers', 'name': 'Veg Burger', 'price': 150, 'img_url': 'https://source.unsplash.com/featured/?burger'},
        {'category': 'Cakes', 'name': 'Chocolate Cake', 'price': 200, 'img_url': 'https://source.unsplash.com/featured/?cake'},
    ]

    for item in sample_items:
        db.session.add(MenuItem(**item))

    db.session.commit()
    print("Database seeded successfully!")
