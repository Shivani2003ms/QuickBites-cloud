const menuCategories = [
    {
        category: "🍕 Pizzas",
        items: [
            { id: 1, name: "Margherita Pizza", price: 250, img: "https://source.unsplash.com/featured/?pizza" },
            { id: 2, name: "Pepperoni Pizza", price: 300, img: "https://source.unsplash.com/featured/?pepperoni-pizza" }
        ]
    },
    {
        category: "🍔 Burgers",
        items: [
            { id: 3, name: "Veg Burger", price: 150, img: "https://source.unsplash.com/featured/?burger" },
            { id: 4, name: "Chicken Burger", price: 180, img: "https://source.unsplash.com/featured/?chicken-burger" }
        ]
    },
    {
        category: "🍟 Sides",
        items: [
            { id: 5, name: "French Fries", price: 100, img: "https://source.unsplash.com/featured/?fries" },
            { id: 6, name: "Onion Rings", price: 120, img: "https://source.unsplash.com/featured/?onion-rings" }
        ]
    },
    {
        category: "🍰 Desserts",
        items: [
            { id: 7, name: "Chocolate Cake", price: 200, img: "https://source.unsplash.com/featured/?chocolate-cake" },
            { id: 8, name: "Vanilla Ice Cream", price: 100, img: "https://source.unsplash.com/featured/?ice-cream" }
        ]
    },
    {
        category: "🥤 Beverages",
        items: [
            { id: 9, name: "Coke", price: 50, img: "https://source.unsplash.com/featured/?coke,soda" },
            { id: 10, name: "Orange Juice", price: 80, img: "https://source.unsplash.com/featured/?orange-juice" }
        ]
    }
];

let cart = [];

function renderMenu() {
    const menuDiv = document.getElementById('menu');
    menuDiv.innerHTML = '';

    menuCategories.forEach(category => {
        menuDiv.innerHTML += `<h2>${category.category}</h2><div class="menu-category">`;

        category.items.forEach(item => {
            menuDiv.innerHTML += `
                <div class="menu-item">
                    <img src="${item.img}" alt="${item.name}" />
                    <h3>${item.name}</h3>
                    <p>Price: ₹${item.price}</p>
                    <button onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            `;
        });

        menuDiv.innerHTML += `</div>`;
    });
}

function addToCart(id) {
    let foundItem = null;
    for (const category of menuCategories) {
        foundItem = category.items.find(i => i.id === id);
        if (foundItem) break;
    }

    if (foundItem) {
        cart.push(foundItem);
        renderCart();
    }
}

function renderCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartDiv.innerHTML += `
            <div>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById('total').innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const order = {
        items: cart,
        total: cart.reduce((sum, i) => sum + i.price, 0),
        status: "Pending"
    };

    document.getElementById('order-status').innerHTML = `
        <h2>✅ Order Placed Successfully!</h2>
        <p>Status: ${order.status}</p>
        <p>Total Amount: ₹${order.total}</p>
    `;

    cart = [];
    renderCart();
}

renderMenu();
