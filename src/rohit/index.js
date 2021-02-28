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

server.use(express.urlencoded({
  extended: true
}))

const path = require('path');

// Creating a GET request handler
server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.get('/abc', (req, res) => {
    res.send('Hello World');
});

server.post('/abc', (req, res) => {
  res.send('post request');
});

const orders = [{order: "Hello", ID: 0},];
let currentID = 1;

server.get('/orders', (req, res) => {
  res.send(orders);
});

server.get('/orderNumber', (req, res) => {
  const orderId = parseInt(req.query.orderID);

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].ID === orderId) {
      res.send(orders[i].order);
    }
  }

  res.send("invalid request")
});


server.post('/orders', (req, res) => {
  const order = req.body;

  let newOrder = {order: order.data, ID: currentID,};
  currentID++;
  orders.push(newOrder);
  // res.send({ success: true });
  res.redirect('back');
});

// Starting up the server
server.listen(3000, () => {
  console.log('Server has started');
});