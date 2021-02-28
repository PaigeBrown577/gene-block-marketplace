// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const ordersRouter = require('./routes/orders');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use('/orders', ordersRouter);

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.listen(3000, () => {
//   console.log('Server running at port 3000');
// });



// still need to hook up to a database
// add ability to delete data from database






// import
const express = require('express');

// Cross Origin Resource Sharing
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.json());

const path = require('path');

// Creating a GET request handler
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.get('/abc', (req, res) => {
    res.send('Hello, world!');
  });

server.post('/abc', (req, res) => {
  res.send('post request');
});

// Requirements for pizza app:
// GET, POST, PUT, PATCH, DELETE
// - retrieve all outstanding orders
//     GET /orders
// - create new order
//     POST /orders
// - delete orders
//     DELETE /orders/<order id>
// - update an order
//     PATCH /orders/<order id>

const orders = [
  {
    id: 0,
    customerName: 'aditya',
    cheese: 'mozarella',
    sauce: 'tomato',
    toppings: ['basil'],
  },
];
let currentId = 1;

server.get('/orders', (req, res) => {
  res.send(orders);
});

// server.post('/orders', (req, res) => {
//   // {
//   //   "customerName": "jim",
//   //   "cheese": "parmesan",
//   //   "sauce": "tomato",
//   //   "toppings": ["pepperoni"]
//   // }
//   const order = req.body;
//   order.id = currentId;
//   currentId++;
//   orders.push(order);
//   res.send({ success: true });
// });


server.post('/orders', (req, res) => {
  // {
  //   "customerName": "jim",
  //   "cheese": "parmesan",
  //   "sauce": "tomato",
  //   "toppings": ["pepperoni"]
  // }
  const order = req.body;
  order.id = currentId;
  currentId++;
  orders.push(order);
  res.send({ success: true });
});

server.delete('/orders/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      orders.splice(i, 1);
      res.send({ success: true });
    }
  }
});

server.patch('/orders/:orderId', (req, res) => {
  const orderId = parseInt(req.params.orderId);

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      Object.assign(orders[i], req.body);
      res.send({ success: true });
    }
  }
});

// Starting up the server
server.listen(3000, () => {
  console.log('Server has started');
});