var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

// Le domaine Auth0 vient maintenant des variables d'environnement
// (fichier .env en local, "Environment Variables" sur Render).
// AUTH0_DOMAIN doit ressembler à "mon-compte.auth0.com" (sans https:// ni slash final).
const auth0Domain = process.env.AUTH0_DOMAIN;
const auth0Audience = process.env.AUTH0_AUDIENCE || 'https://gradeforest.api';

if (!auth0Domain) {
  throw new Error(
    "Variable d'environnement AUTH0_DOMAIN manquante (ex: mon-compte.auth0.com)"
  );
}

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
  }),
  audience: auth0Audience,
  issuer: `https://${auth0Domain}/`,
  algorithms: ['RS256'],
});
