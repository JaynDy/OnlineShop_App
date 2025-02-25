import { Product, Cart } from "./CartClass.js";

export function setCardAddArrToLocalStorage(arr) {
  localStorage.setItem("cardAddArr", JSON.stringify(arr));
}

export function getCardAddArrFromLocalStorage() {
  const storedData = localStorage.getItem("cardAddArr");
  return storedData ? JSON.parse(storedData) : [];
}

export function saveCartToLocalStorage(myCart) {
  localStorage.setItem("cart", JSON.stringify({ products: myCart.products }));
  console.log(myCart);
}

export function getCartFromLocalStorage() {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || {
    products: [],
  };
  const cart = new Cart();
  savedCart.products.forEach((productData) => {
    const product = new Product(
      productData.imageSrc,
      productData.title,
      productData.price,
      productData.quantity,
      productData.dataIndex
    );
    product.quantity = productData.quantity;
    product.dataIndex = productData.dataIndex;
    cart.addProduct(product);
  });

  return cart;
}
