module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5488c2efbd2ba88d6c7a4e3ffe0f3ab3'),
    },
  },
});
