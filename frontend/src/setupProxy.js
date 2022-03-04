//This file is because adding "proxy" in the package.json was not working

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8000',
      changeOrigin: true,
    })
  );
};