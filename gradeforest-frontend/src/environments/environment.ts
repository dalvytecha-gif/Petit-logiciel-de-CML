export const environment = {
  production: false,
  auth: {
    domain: 'temporaire.auth0.com',
    clientId: 'PLACEHOLDER_CLIENT_ID',
    authorizationParams: {
      redirect_uri: window.location.origin,
      audience: 'https://gradeforest.api',
    },
  },
};
