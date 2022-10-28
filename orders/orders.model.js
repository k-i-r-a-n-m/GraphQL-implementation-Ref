const orders = [
  {
    date: "2005-05-05",
    subtotal: 90.25,
    items: [
      {
        product: {
          id: "redshoe",
          description: "red Shoe",
          price: 45.4,
        },
        quantity: 2,
      },
    ],
  },
];


const getAllOrders = () => {
    return orders
}


module.exports = {
    getAllOrders
}