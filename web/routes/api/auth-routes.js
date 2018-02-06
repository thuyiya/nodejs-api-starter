import * as authHandler from '../../handlers/auth-handler';
import { application } from '../../../config';

module.exports = {
  /**
  * @api {post} /authenticate sign in
  * @apiName authenticate
  * @apiGroup Auth
  *
  */
  setupRoute: (router) => {
    router.route(application.ROUTE.authlogin)
      .post(authHandler.login);
  }
};
