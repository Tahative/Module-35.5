const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';



    console.log(product, quantity);
    displayProduct(product,quantity);
    savedLocalStorage(product,quantity);

}

const displayProduct = (product,quantity) => {
    const ulContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity} `;
    ulContainer.appendChild(li);

}

const getStorageShoppingCart = () =>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}
// save in local storage
const savedLocalStorage = (product,quantity) => {
    const cart = getStorageShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getStorageShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductFromLocalStorage();
