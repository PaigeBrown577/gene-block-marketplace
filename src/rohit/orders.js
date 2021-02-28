// const express = require('express');

// const ordersRouter = express.Router();

// const orders = [];
// let currentId = 0;

// ordersRouter.get('/', (req, res) => {
//   res.send(orders);
// });

// ordersRouter.post('/', (req, res) => {
//   const newOrder = {
//     id: currentId,
//     cheese: req.body.cheese,
//     sauce: req.body.sauce,
//     toppings: req.body.toppings,
//   };
//   currentId++;

//   orders.push(newOrder);

//   res.send(newOrder);
// });

// ordersRouter.get('/:orderId', (req, res) => {
//   const orderId = req.params.orderId;

//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].id === orderId) {
//       res.send(orders[i]);
//     }
//   }
// });

// ordersRouter.patch('/:orderId', (req, res) => {
//   const orderId = req.params.orderId;

//   const orderUpdates = {
//     cheese: req.body.cheese,
//     sauce: req.body.sauce,
//     toppings: req.body.toppings,
//   };

//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].id === orderId) {
//       const updatedOrder = Object.assign(orders[i], orderUpdates);
//       res.send(updatedOrder);
//     }
//   }
// });

// ordersRouter.delete('/:orderId', (req, res) => {
//   const orderId = req.params.orderId;

//   for (let i = 0; i < orders.length; i++) {
//     if (orders[i].id === orderId) {
//       delete orders[i];
//       res.send({ success: true });
//     }
//   }
// });

// module.exports = ordersRouter;