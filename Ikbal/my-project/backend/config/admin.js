module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4b9cb0a847d4b4daa3bf74757bb61cc'),
  },
});
