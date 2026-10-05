// Bọc app Express thành Netlify Function để API chạy được trên Netlify.
const serverless = require('serverless-http');
const app = require('../../backend/server');

module.exports.handler = serverless(app);
