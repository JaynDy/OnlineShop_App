import { storedCardAddArr } from "../cards/cardsArr.js";
import {
  setCardAddArrToLocalStorage,
  saveCartToLocalStorage,
} from "./cartLocalStorage.js";
import { myCart, cartNum } from "./cart.js";
import { popupContainerFill } from "./cartPopup.js";

function getCardAddArr() {
  return Array.from(document.querySelectorAll(".card-add, .add-to-cart"));
}

export function updateCardClass() {
  const cardAddElements = getCardAddArr();

  cardAddElements.forEach((cardAdd) => {
    const dataIndex = cardAdd.dataset.index.toString();
    const productInCart = myCart.findProductByDataIndex(dataIndex);

    if (productInCart) {
      cardAdd.classList.remove("card-add");
      cardAdd.classList.add("add-to-cart");
    } else {
      cardAdd.classList.remove("add-to-cart");
      cardAdd.classList.add("card-add");
    }

    const foundItem = storedCardAddArr.find(
      (item) => item.dataIndex === dataIndex
    );

    if (foundItem) {
      foundItem.classList = Array.from(cardAdd.classList);
    }
  });
  setCardAddArrToLocalStorage(storedCardAddArr);
  console.log("Stored Card Add Array:", storedCardAddArr);
  console.log("cardAddElements", cardAddElements);
}

document.addEventListener("DOMContentLoaded", function () {
  updateCardClass();
});

export function removeProductFromCart(productDataIndex) {
  const productIndex = myCart.products.findIndex(
    (product) => product.dataIndex === productDataIndex
  );
  if (productIndex !== -1) {
    const removedProduct = myCart.products[productIndex];
    myCart.removeProductDataIndex(removedProduct);
    saveCartToLocalStorage(myCart);

    const dataIndex = removedProduct.dataIndex;
    console.log(dataIndex);
    const classToAdd = "card-add";
    const classToRemove = "add-to-cart";
    updateStoredCardAddArr(dataIndex, classToAdd, classToRemove);

    popupContainerFill();
    cartNum.textContent = myCart.count;
    console.log(removedProduct);
    console.log(myCart);
  }
}

export function updateStoredCardAddArr(dataIndex, classToAdd, classToRemove) {
  const indexToUpdate = storedCardAddArr.findIndex(
    (item) => item.dataIndex === dataIndex
  );
  console.log(indexToUpdate);

  if (indexToUpdate !== -1) {
    const item = storedCardAddArr[indexToUpdate];
    console.log(item);

    const classToAddIndex = item.classList.indexOf(classToAdd);
    const classToRemoveIndex = item.classList.indexOf(classToRemove);

    if (classToAddIndex === -1) {
      item.classList.push(classToAdd);
      console.log(item);
    }

    if (classToRemoveIndex !== -1) {
      item.classList.splice(classToRemoveIndex, 1);
      console.log(item);
    }
  }

  console.log(indexToUpdate);
  setCardAddArrToLocalStorage(storedCardAddArr);
  console.log("Updated storedCardAddArr:", storedCardAddArr);
  updateCardClass();
}
