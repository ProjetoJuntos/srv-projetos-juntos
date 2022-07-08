const server = require('./server');

const goLive = async () => {
  const instance = await server.start();
  console.log(`server listening on ${instance.server.address().port}`);
};

goLive();
