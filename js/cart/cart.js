import { popupContainerFill } from "./cartPopup.js";
import {
  saveCartToLocalStorage,
  getCartFromLocalStorage,
} from "./cartLocalStorage.js";
import { Product } from "./CartClass.js";
import {
  updateStoredCardAddArr,
  removeProductFromCart,
} from "./cartFunctions.js";

export const cartNum = document.querySelector("#cart-num");
const cartImg = document.querySelector(".cart-img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector("#popup_close");
export const popupProductList = document.querySelector("#popup_product_list");

document.addEventListener("click", function (event) {
  const target = event.target;
  if (
    target.classList.contains("card-add") ||
    target.classList.contains("add-to-cart")
  ) {
    const clickedCardAdd = target.closest(".card");
    const imageSrc = clickedCardAdd.querySelector(".card-avatar").src;
    const title = clickedCardAdd.querySelector(".card-title").innerText;
    const price = clickedCardAdd.querySelector(".card-price").innerText;
    const dataIndex = target.getAttribute("data-index");
    const existingProduct = myCart.findProductByDataIndex(dataIndex);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const product = new Product(imageSrc, title, price, 1, dataIndex);
      product.dataIndex = dataIndex;
      myCart.addProduct(product);
    }
    saveCartToLocalStorage(myCart);
    popupContainerFill();
    cartNum.textContent = myCart.count;
    const classToAdd = "card-add";
    const classToRemove = "add-to-cart";
    updateStoredCardAddArr(dataIndex, classToAdd, classToRemove);
    console.log(myCart);
    console.log("findProductByDataIndex(dataIndex)", existingProduct);
  }
});

export const myCart = getCartFromLocalStorage();
cartNum.textContent = myCart.count;
saveCartToLocalStorage(myCart);
popupContainerFill();

cartImg.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("popup--open");
});

popupClose.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.remove("popup--open");
});

popupProductList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("popup__product-delete")) {
    const productElement = target.closest(".popup__product");
    const productDataIndex = productElement.getAttribute("data-index");
    removeProductFromCart(productDataIndex);
  }
});
