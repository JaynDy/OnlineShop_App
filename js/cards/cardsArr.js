export let cards = [
  {
    avatar: "img/fox1.svg",
    button: "icon/add-orang.svg",
    title: "Fox 1",
    value: "120",
    stars: "icon/stars.svg",
    group: "Forest",
  },
  {
    avatar: "img/fox2.svg",
    button: "icon/add-orang.svg",
    title: "Fox 2",
    value: "120",
    stars: "icon/stars.svg",
    group: "Office",
  },
  {
    avatar: "img/fox3.svg",
    button: "icon/add-orang.svg",
    title: "Fox 3",
    value: "180",
    stars: "icon/stars.svg",
    group: "Foxkid",
  },
  {
    avatar: "img/fox4.svg",
    button: "icon/add-orang.svg",
    title: "Fox 4",
    value: "182",
    stars: "icon/stars.svg",
    group: "Foxkid",
  },
  {
    avatar: "img/fox5.svg",
    button: "icon/add-orang.svg",
    title: "Fox 5",
    value: "200",
    stars: "icon/stars.svg",
    group: "Forest",
  },
  {
    avatar: "img/fox6.svg",
    button: "icon/add-orang.svg",
    title: "Fox 6",
    value: "120",
    stars: "icon/stars.svg",
    group: "Other",
  },
  {
    avatar: "img/fox7.svg",
    button: "icon/add-orang.svg",
    title: "Fox 7",
    value: "210",
    stars: "icon/stars.svg",
    group: "Forest",
  },
  {
    avatar: "img/fox8.svg",
    button: "icon/add-orang.svg",
    title: "Fox 8",
    value: "130",
    stars: "icon/stars.svg",
    group: "Foxkid",
  },
];

let index = "10";
cards = cards.map((card) => {
  return {
    ...card,
    dataIndex: index++,
    classList: ["card-add"],
  };
});
console.log(cards);
export const storedCardAddArr = [...cards];
console.log(storedCardAddArr);

storedCardAddArr.forEach((item) => {
  item.dataIndex = String(item.dataIndex);
});
