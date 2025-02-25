import { cards } from "./cardsArr.js";
import { renderCardsBasedOnStoredData } from "./cards.js";

////////////////////////////RANGER////////////////////////////

const rangerEl = document.querySelector("#range");
const rangeValue = document.querySelector("#value");

let activeFilter = "all";
let currentValue = rangerEl.value;

window.addEventListener("load", () => {
  rangeValue.textContent = currentValue;
  rangerEl.style.background = `linear-gradient(to right, rgba(204, 85, 32, 1) 0%, rgba(204, 85, 32, 1) ${
    (currentValue / rangerEl.max) * 100
  }%, rgba(160, 160, 160, 1) ${(currentValue / rangerEl.max) * 100}%)`;

  rangerEl.addEventListener("input", (event) => {
    currentValue = parseInt(event.target.value);
    rangeValue.textContent = currentValue;
    rangerEl.style.background = `linear-gradient(to right, rgba(204, 85, 32, 1) 0%, rgba(204, 85, 32, 1) ${
      (currentValue / rangerEl.max) * 100
    }%, rgba(160, 160, 160, 1) ${(currentValue / rangerEl.max) * 100}%)`;

    handleFilterClick(activeFilter);
  });
});

////////////////////////////FILTERS////////////////////////////

let filteredCards = cards.slice();
const filterButton = document.querySelectorAll(".filter-button");

filterButton.forEach((div) => {
  div.addEventListener("click", (event) => {
    activeFilter = event.target.dataset.filter;
    handleFilterClick(activeFilter);
  });
});

export function handleFilterClick(clickedFilter) {
  if (clickedFilter === "all") {
    filteredCards = cards.filter(
      (card) => parseInt(card.value) <= currentValue
    );
  } else {
    filteredCards = cards.filter(
      (card) =>
        card.group === clickedFilter && parseInt(card.value) <= currentValue
    );
  }
  rangerEl.value = currentValue;
  rangeValue.textContent = currentValue;
  rangerEl.style.background = `linear-gradient(to right, rgba(204, 85, 32, 1) 0%, rgba(204, 85, 32, 1) ${
    (currentValue / rangerEl.max) * 100
  }%, rgba(160, 160, 160, 1) ${(currentValue / rangerEl.max) * 100}%)`;

  renderCardsBasedOnStoredData(filteredCards);
}

const allCards = document.querySelector(".all");
allCards.addEventListener("click", showAllCards);

function showAllCards() {
  activeFilter = "all";
  handleFilterClick(activeFilter);
}

const allFoxes = document.querySelector(".allFoxes");
allFoxes.addEventListener("click", showAllFoxes);

function showAllFoxes() {
  activeFilter = "all";
  renderCardsBasedOnStoredData(cards);
}

////////////////////////////SEARCH////////////////////////////

function filterCardBySearch(cards, searchTerm) {
  return cards.filter((card) => {
    const title = card.title.toLowerCase();
    return title.includes(searchTerm);
  });
}

const search = document.getElementById("search");

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();
  filteredCards = filterCardBySearch(cards, searchTerm);
  renderCardsBasedOnStoredData(filteredCards);
});
