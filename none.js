// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNums.reduce((acc, curVal) => {
//   console.log(`acc: ${acc}, curVal ${curVal}`);
//   return acc + curVal;
// }, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 699,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 9.98,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20.99,
  },
  {
    product: "Charger",
    qty: 1,
    price: 19.99,
  },
  {
    product: "Case",
    qty: 1,
    price: 24.99,
  },
  {
    product: "Headphones",
    qty: 1,
    price: 44.99,
  },
];



const total = shoppingCart.reduce((acc, curVal) => {
     return acc + curVal.price * curVal.qty;
}, 0);



console.log(total);
