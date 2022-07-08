const server = require('./server');

const goLive = async () => {
  const instance = await server.start();
  console.log(`server listening on ${instance.server.address().port} / ${process.env.BASE_ROUTE}`);
};

goLive();
