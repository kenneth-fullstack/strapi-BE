module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99d36ca3313fb91e82b8c73947d6ce3c'),
  },
});
