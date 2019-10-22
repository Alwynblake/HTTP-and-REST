'use strict';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(router);
server.use(middlewares);
server.listen(3000, () => {
  console.log('Json-server awaiting requests');
});