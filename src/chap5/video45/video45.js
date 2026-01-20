console.log("video45");

const object1 = {
    name: "Shirt",
    price: 2000,
    inStock: true,
}

const object2 = {
    name: "Pants",
    price: 3000,
    inStock: false,
}

const object3 = {
    name: "Socks",
    price: 500,
    inStock: true,
}

const object4 = {
    name: "Hat",
    price: 1500,
    inStock: true,
}

const object5 = {
    name: "Jacket",
    price: 8000,
    inStock: false,
}

const products = [object1, object2, object3, object4, object5];

console.log(object1.name);

object2.price = 3500;
console.log(products);
// Add a new product
object6 = {
    name: "Belt",
    price: 1200,
    inStock: true,
}

products.push(object6);
console.log(products);

// Remove the last product
products.pop();
console.log(products);

products.forEach(product => {
    console.log(product.name);
});

let priceproducts = products.map(product => product.price);

console.log(priceproducts);

let filteredProducts = products.filter(product => product.inStock === true);
console.log(filteredProducts);

for (let key in object1) {
    console.log(key, ": ", object1[key]);
}