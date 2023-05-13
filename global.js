/**
 * 產品資料
 * @type { Products[] }
 */
const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Conditioner', price: 3.99 },
  { name: 'Comb', price: 2.99 },
];

/**
 * 計算總價
 * @param { Products[] } products 產品資料
 * @returns { number } 總價
 * @example
 * sumPrice(products); // 11.97
 */
const sumPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
}

sumPrice(products);