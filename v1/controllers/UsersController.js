const run = async (request, reply) => {
  reply
    .code(200)
    .send('hello');
};

module.exports = run;
