const schemaBeneficiarios = {
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          _id: { type: 'string' },
          nome: { type: 'string' },
          email: { type: 'string' },
          telefone: { type: 'string' },
          cidade: { type: 'string' },
          ong: {
            type: 'boolean',
            default: false,
          },
          roupa: {
            type: 'boolean',
            default: false,
          },
          alimento: {
            type: 'boolean',
            default: false,
          },
          rua: { type: 'string' },
          numero: { type: 'string' },
          complemento: { type: 'string' },
          CEP: { type: 'string' },
          bairro: { type: 'string' },
          estado: { type: 'string' },
        },
      },
    },
  },
};

module.exports = schemaBeneficiarios;
