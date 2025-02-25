import { toNum } from "./cartSundry.js";

export class Product {
  constructor(imageSrc, title, price, quantity = 1) {
    this.imageSrc = imageSrc;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
}

export class Cart {
  products;

  constructor() {
    this.products = [];
  }

  get count() {
    return this.products ? this.products.length : 0;
  }

  findProductByDataIndex(dataIndex) {
    return this.products.find((p) => p.dataIndex === dataIndex);
  }

  addProduct(product) {
    console.log("New Product:", product);
    console.log("Existing Product:", this.products);
    const existingProduct = this.findProductByDataIndex(product.dataIndex);
    if (!existingProduct) {
      this.products.push(product);
    }
  }

  removeProductDataIndex(product) {
    if (!this.products) {
      return;
    }
    this.products = this.products.filter(
      (p) => p.dataIndex !== product.dataIndex
    );
    console.log(product.dataIndex);
  }

  calculateCartCost() {
    if (!this.products) {
      return 0;
    }
    const prices = this.products.map((product) => {
      const price = toNum(product.price);
      console.log(
        `Product: ${product.title}, Price: ${price}, Quantity: ${
          product.quantity
        }, Subtotal: ${price * product.quantity}`
      );
      return price * product.quantity;
    });

    const sum = prices.reduce((acc, num) => acc + num, 0);
    console.log(`Total Cost: ${sum}`);
    return sum;
  }

  get cost() {
    return this.calculateCartCost();
  }
}
