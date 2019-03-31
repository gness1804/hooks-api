#!/usr/bin/env node

const jsonServer = require('json-server');
const db = require('./data.json');
const server = jsonServer.create();
server.use(jsonServer.defaults());

const router = jsonServer.router(db);
server.use(router);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return next();
});

server.listen(3777);

console.log(`API available on http://localhost:3777/todos`);
