// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties.
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
/* Seems like there's only 3 properties */
// -- name
// -- inventory
// -- unit_price
const products = [
  { name: 'Budweiser 30pk Can', inventory: 22, unit_price: 25.99 },
  { name: 'Bud Light 30pk Can', inventory: 31, unit_price: 25.99 },
  { name: 'Captain Morgan 1.75L', inventory: 15, unit_price: 31.99 },
  { name: 'Captain Morgan 750mL', inventory: 43, unit_price: 24.99 }
]

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.
const listProducts = (arrProd) => {
  let list = []
  for (let i = 0; i < arrProd.length; i++) {
    list.push(arrProd[i].name)
  }
  return list
}

// 4. Call the listProducts() function and log the returned value to the console.
console.log(listProducts(products))

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value
const totalValue = (arrProd) => {
  let inventoryVal = 0
  for (let i = 0; i < arrProd.length; i++) {
    inventoryVal += arrProd[i].inventory * arrProd[i].unit_price
  }
  return inventoryVal.toFixed(2)
}

// 6. Call the totalValue() function and log the returned value to the console.
console.log(totalValue(products))

// 7. Run your code by typing node 3_final_products.js in the console below
