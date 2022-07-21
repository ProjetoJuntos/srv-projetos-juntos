const schemaEntregadores = {
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          nome: { type: 'string' },
          sobrenome: { type: 'string' },
          telefone: { type: 'string' },
          cidade: { type: 'string' },
          qtd: { type: 'number', default: 0 },
          ong: {
            type: 'boolean',
            default: false,
          },
          rua: { type: 'string' },
          numero: { type: 'string' },
          complemento: { type: 'string' },
          cep: { type: 'string' },
          estado: { type: 'string' },
        },
      },
    },
  },
};

module.exports = schemaEntregadores;
