const orders = require("./orders.model");

module.exports = {
  Query: {
    orders: () => {
      console.log(orders.getAllOrders());
      return orders.getAllOrders();
    },
  },
};
