module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1347),
  app: {
    keys: ["J9lTKAjcWzmhzinP0WGb1w==","9hfDSTNwee3CzmYOpcz1Lg==","p54XtUe4PlBRrd8p+Qcv1A=="],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
