const schemaDoacoes = {
  response: {
    200: {
      type: 'array',
      items: {
        properties: {
          _id: { type: 'string' },
          tipo: { type: 'string' },
          desc: { type: 'string' },
          foto: { type: 'string' },
          entregue: {
            type: 'boolean',
            default: false,
          },
          cidade: { type: 'string' },
          rua: { type: 'string' },
          numero: { type: 'string' },
          complemento: { type: 'string' },
          CEP: { type: 'string' },
          bairro: { type: 'string' },
          estado: { type: 'string' },
          beneficiario: { type: 'object' },
          doador: { type: 'object' },
          entregador: { type: 'object' },
        },
      },
    },
  },
};

module.exports = schemaDoacoes;
