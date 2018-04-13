import * as userHandler from '../../handlers/user-handler';

module.exports = {
  setupRoute: (router) => {
    router.route('/users')
      .get(userHandler.signup);
  }
};
