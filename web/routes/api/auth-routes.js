import * as authHandler from '../../handlers/auth-handler';
import { application } from '../../../config';

module.exports = {
  setupRoute: (router) => {
    router.route(application.ROUTE.authlogin)
      .get(authHandler.login);
  }
};
