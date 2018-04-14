import UserServices from '../services/user-service';
import { SUCCESS_RESPONCE, ERROR_RESPONCE } from '../common/response';

export const signUp = async (req, res) => {
  try {
    req.body.method = 'local';
    const user = await UserServices.createUser(req.body);
    res.status(200).json(SUCCESS_RESPONCE.success(user));
  } catch (error) {
    res.status(401).json(ERROR_RESPONCE.unauthorized(error));
  }
};
