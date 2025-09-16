from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from models import db, MenuItem, Order
import json

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

@app.before_first_request
def create_tables():
    db.create_all()

@app.route('/menu', methods=['GET'])
def get_menu():
    items = MenuItem.query.all()
    result = []
    for item in items:
        result.append({
            'id': item.id,
            'category': item.category,
            'name': item.name,
            'price': item.price,
            'img': item.img_url
        })
    return jsonify(result)

@app.route('/order', methods=['POST'])
def place_order():
    data = request.get_json()
    items = data['items']
    total = data['total']
    new_order = Order(items=json.dumps(items), total=total)
    db.session.add(new_order)
    db.session.commit()
    return jsonify({"id": new_order.id, "status": new_order.status, "total": total})

@app.route('/order/<int:order_id>', methods=['GET'])
def get_order(order_id):
    order = Order.query.get(order_id)
    if order:
        return jsonify({
            "id": order.id,
            "items": json.loads(order.items),
            "total": order.total,
            "status": order.status
        })
    return jsonify({"error": "Order not found"}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
