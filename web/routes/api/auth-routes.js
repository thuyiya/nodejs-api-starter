import passport from 'passport';
import * as authHandler from '../../handlers/auth-handler';

module.exports = {
  setupRoute: (router) => {
    router.route('/auth/login')
      .get(authHandler.login);
    router.route('/auth/google')
      .get(authHandler.googleAuth);
    router.route('/auth/google/callback')
      .get(passport.authenticate('google'), authHandler.googleCallback);
    router.route('/auth/facebook')
      .get(authHandler.facebookAuth);
    router.route('/auth/facebook/callback')
      .get(passport.authenticate('facebook'), authHandler.facebookCallback);
    router.route('/auth/logout')
      .get(authHandler.logout);
  }
};
