const server = require('./server');

const goLive = async () => {
  const instance = await server.start();
  instance.log.info(`server listening on ${instance.server.address().port}`);
};

goLive();
