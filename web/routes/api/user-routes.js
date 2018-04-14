import { RequestValidator } from '../../middleware/';
import * as UsersHandler from '../../handlers/user-handler';

export default (router) => {
  router.route('/users')
    .post(RequestValidator.validateBody(RequestValidator.schemas.userCreateSchema), UsersHandler.signUp);
};
