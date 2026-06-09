```javascript
/* =========================
   DORI CRAFT BY DIVYA
   SCRIPT.JS
========================= */

const products = [

{
    id:1,
    name:"Yellow Colour 3 Pcs Planter Set",
    price:799,
    oldPrice:1199,
    image:"images/planter-yellow.jpg",
    badge:"Handmade",
    description:"Handcrafted cotton rope planter set perfect for home décor and indoor plants."
},

{
    id:2,
    name:"Red Colour 3 Pcs Planter Set",
    price:799,
    oldPrice:1199,
    image:"images/planter-red.jpg",
    badge:"Best Seller",
    description:"Beautiful handcrafted planter set made using eco-friendly cotton rope."
},

{
    id:3,
    name:"Green Colour 3 Pcs Planter Set",
    price:799,
    oldPrice:1199,
    image:"images/planter-green.jpg",
    badge:"Eco-Friendly",
    description:"Nature-inspired planter set designed to complement indoor greenery."
},

{
    id:4,
    name:"Mobile Sling Bag",
    price:399,
    oldPrice:null,
    image:"images/mobile-sling.jpg",
    badge:"Limited Stock",
    description:"Compact handmade sling bag for daily essentials."
},

{
    id:5,
    name:"Tote Bag",
    price:399,
    oldPrice:null,
    image:"images/tote-bag.jpg",
    badge:"Handmade",
    description:"Stylish and spacious tote bag made with care."
}

];

/* =========================
   PRODUCT DISPLAY
========================= */

const productContainer =
document.getElementById("productContainer");

function displayProducts(){

productContainer.innerHTML = "";

products.forEach(product => {

let oldPriceHTML = "";

if(product.oldPrice){
oldPriceHTML =
`<span class="old-price">₹${product.oldPrice}</span>`;
}

productContainer.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<span class="badge">${product.badge}</span>

<h3>${product.name}</h3>

<p>${product.description}</p>

<p class="price">
₹${product.price}
${oldPriceHTML}
</p>

<button class="add-cart"
onclick="addToCart(${product.id})">

🛒 Add To Cart

</button>

</div>

</div>

`;

});

}

displayProducts();

/* =========================
   CART SYSTEM
========================= */

let cart = [];

function addToCart(productId){

const product =
products.find(item => item.id === productId);

const existing =
cart.find(item => item.id === productId);

if(existing){

existing.quantity++;

}else{

cart.push({
...product,
quantity:1
});

}

updateCart();

}

function updateCart(){

const cartItems =
document.getElementById("cartItems");

const cartCount =
document.getElementById("cartCount");

const cartTotal =
document.getElementById("cartTotal");

cartItems.innerHTML = "";

let total = 0;
let count = 0;

cart.forEach(item => {

total += item.price * item.quantity;
count += item.quantity;

cartItems.innerHTML += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>
₹${item.price} × ${item.quantity}
</p>

<div style="margin-top:8px;">

<button onclick="decreaseQty(${item.id})">
➖
</button>

<button onclick="increaseQty(${item.id})">
➕
</button>

<button onclick="removeItem(${item.id})">
🗑
</button>

</div>

</div>

`;

});

cartCount.innerText = count;
cartTotal.innerText = total;

}

/* =========================
   CART ACTIONS
========================= */

function increaseQty(id){

const item =
cart.find(product => product.id === id);

item.quantity++;

updateCart();

}

function decreaseQty(id){

const item =
cart.find(product => product.id === id);

if(item.quantity > 1){

item.quantity--;

}else{

cart =
cart.filter(product => product.id !== id);

}

updateCart();

}

function removeItem(id){

cart =
cart.filter(product => product.id !== id);

updateCart();

}

/* =========================
   CART SIDEBAR
========================= */

function toggleCart(){

document
.getElementById("cartSidebar")
.classList
.toggle("active");

}

/* =========================
   WHATSAPP ORDER
========================= */

function orderOnWhatsApp(){

if(cart.length === 0){

alert(
"Your cart is empty."
);

return;

}

let message =
"Hello Dori Craft,%0A%0A";

message +=
"I would like to place an order:%0A%0A";

let total = 0;

cart.forEach(item => {

let itemTotal =
item.price * item.quantity;

total += itemTotal;

message +=
"• " +
item.name +
" x " +
item.quantity +
" - ₹" +
itemTotal +
"%0A";

});

message +=
"%0A";

message +=
"Total: ₹" +
total +
"%0A%0A";

message +=
"Delivery Location: Bhiwadi%0A%0A";

message +=
"Please share availability and payment details.%0A%0A";

message +=
"Thank you.";

const whatsappLink =
"https://wa.me/917737371029?text=" +
message;

window.open(
whatsappLink,
"_blank"
);

}
```
