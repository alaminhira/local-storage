const shoppingList = document.getElementById('shopping-list');
const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('products')) ?? {};
}

const addToCart = (product, quantity) => {
    const shoppingItem = document.createElement('li');
    shoppingItem.innerHTML = `Name: ${product}, Quantity: ${quantity}`;
    shoppingList.appendChild(shoppingItem);
}

 const displaySavedProducts = () => {
    const products = getFromLocalStorage();
    const productList = Object.keys(products);

    if (productList.length) {
        productList.forEach(prod => {
            addToCart(prod, products[prod]);
        })
    } else {
        return products;
    }

}
displaySavedProducts();

const getProductValues = () => {
    // Get the value from UI
    const product = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const productName = product.value;
    const quantity = +productQuantity.value;

    // Add to the cart
    addToCart(productName, quantity);

    // Save to local storage
    saveToLocalStorage(productName, quantity)

    // Clear input fields
    product.value = productQuantity.value = '';
}

const saveToLocalStorage = (name, quantity) => {
    const products = getFromLocalStorage();
    products[name] = quantity;
    localStorage.setItem('products', JSON.stringify(products));
}

document.getElementById('add-to-cart').addEventListener('click', getProductValues);

