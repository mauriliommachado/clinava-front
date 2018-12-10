const proxy = [
    {
      context: '/api',
      target: 'https://clinava.herokuapp.com/',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;