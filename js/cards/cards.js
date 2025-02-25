import { updateCardClass } from "../cart/cartFunctions.js";
import { storedCardAddArr } from "./cardsArr.js";

const cardsContainer = document.getElementById("cards-container");

function createCardBasedOnStoredData(cardData) {
  const cardElement = document.createElement("div");

  const cardElementHTML = `<div class="card">
    <div class="details">
      <div class="picture">
        <img class="card-avatar" src="${cardData.avatar}" alt="" />
        <div class="card-add" data-index=${cardData.dataIndex}></div>
      </div>
      <div class="details-text">
        <a class="card-title">${cardData.title}</a>
        <span class="card-price"><span>$</span>${cardData.value}</span>
        <img src="${cardData.stars}" alt="" />
        <b>${cardData.group}</b>
      </div>
    </div>
  </div>`;

  cardElement.innerHTML = cardElementHTML;
  return cardElement;
}

export function renderCardsBasedOnStoredData(storedCardAddArr) {
  cardsContainer.innerHTML = "";
  storedCardAddArr.forEach((cardData) => {
    const cardElement = createCardBasedOnStoredData(cardData);
    cardsContainer.appendChild(cardElement);
  });
  console.log(
    "renderCardsBasedOnStoredData(storedCardAddArr)",
    storedCardAddArr
  );
  updateCardClass();
}

document.addEventListener("DOMContentLoaded", function () {
  renderCardsBasedOnStoredData(storedCardAddArr);
});
