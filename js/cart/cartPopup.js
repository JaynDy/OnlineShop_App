import { popupProductList, myCart } from "./cart.js";
import { saveCartToLocalStorage } from "./cartLocalStorage.js";
import { toNum, toCurrency } from "./cartSundry.js";
import { updateCardClass } from "./cartFunctions.js";

export function popupContainerFill() {
  let itemHeadHTML = `
              <div class="popup__item-head">
                <h3>box</h3>
                <h1>Your Bag</h1>
              </div>`;

  const productsHTML = myCart.products.map((product) => {
    return `
                <div class="popup__product" data-index=${product.dataIndex}>
                  <div class="popup__product-wrap">
                    <img class="popup__product-image" src="${
                      product.imageSrc
                    }" />
                    <div class="popup__product-text">
                      <span class="popup__product-title">${product.title}</span>
                      <div class="popup__product-price">${toCurrency(
                        toNum(product.price)
                      )}</div>
                    </div>
                  </div>
                  <div class="popup__product-wrap">
                    <div class="popup__product-amount">
                      <div class="popup__product-minus" data-index="${
                        product.dataIndex
                      }">-</div>
                      <div class="popup__product-quantity">${
                        product.quantity || 1
                      }</div>
                      <div class="popup__product-plus" data-index="${
                        product.dataIndex
                      }">+</div>
                    </div>
                    <div class="popup__product-remove">
                      <p>Remove</p>
                      <img class="popup__product-delete" src="icon/delet.svg" alt="" />
                    </div>
                  </div>`;
  });

  const productsFragment = document.createDocumentFragment();
  productsHTML.forEach((productHTML) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = productHTML;
    productsFragment.appendChild(productDiv);
  });

  popupProductList.innerHTML = itemHeadHTML;
  popupProductList.appendChild(productsFragment);
  const totalCostHTML = `
            <div class="popup__item">
              <div class="popup__cost-wrap">
                <span class="popup__cost-title">Total:</span>
                <output class="popup__cost-value" id="popup_cost">${toCurrency(
                  myCart.calculateCartCost()
                )}</output>
              </div>
              <button type="button" class="popup__cost-button">Checkout</button>
            </div>`;

  popupProductList.insertAdjacentHTML("beforeend", totalCostHTML);
  const popupCost = document.querySelector("#popup_cost");
  if (popupCost) {
    const totalCost = myCart.calculateCartCost();
    const formattedTotalCost = parseFloat(totalCost).toFixed(2);
    popupCost.innerText = `$${formattedTotalCost}`;
  } else {
    console.error("Element with id 'popup_cost' not found");
  }

  const minusButtons = document.querySelectorAll(".popup__product-minus");
  const plusButtons = document.querySelectorAll(".popup__product-plus");
  minusButtons.forEach((button) => {
    button.addEventListener("click", handleQuantityChange);
  });
  plusButtons.forEach((button) => {
    button.addEventListener("click", handleQuantityChange);
  });

  updateCardClass();
}

function handleQuantityChange(event) {
  const dataIndex = event.target.getAttribute("data-index");
  const product = myCart.products.find((p) => p.dataIndex === dataIndex);
  if (product) {
    if (event.target.classList.contains("popup__product-minus")) {
      if (product.quantity > 1) {
        product.quantity--;
      }
    } else if (event.target.classList.contains("popup__product-plus")) {
      product.quantity++;
    }
    saveCartToLocalStorage(myCart);
    popupContainerFill();
  }
}
