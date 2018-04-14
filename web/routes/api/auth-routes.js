import passport from 'passport';
import * as passportMiddleware from '../../middleware/passport';
import { RequestValidator } from '../../middleware/';
import * as AuthHandler from '../../handlers/auth-handler';

export default (router) => {
  passportMiddleware.localStrategys();

  router.route('/auth/login')
    .post(RequestValidator.validateBody(RequestValidator.schemas.authLoginSchema), passportMiddleware.authenticate, AuthHandler.login);
  router.route('/auth/google')
    .get(AuthHandler.googleAuth);
  router.route('/auth/google/callback')
    .get(passport.authenticate('google'), AuthHandler.googleCallback);
  router.route('/auth/facebook')
    .get(AuthHandler.facebookAuth);
  router.route('/auth/facebook/callback')
    .get(passport.authenticate('facebook'), AuthHandler.facebookCallback);
  router.route('/auth/logout')
    .get(passport.authenticate('jwt', { session: false }), AuthHandler.logout);
  router.route('/auth/secret')
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
      res.send('hi');
    });
};
