module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb3c1af59b361420e89176869a4d6911'),
  },
});
