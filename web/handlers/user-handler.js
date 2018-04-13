import passport from 'passport';
import { SUCCESS_RESPONCE, ERROR_RESPONCE } from '../common/response';

export const signup = async (req, res) => {
  try {
    res.status(200).json(SUCCESS_RESPONCE.success('register'));
  } catch (error) {
    res.status(200).json(ERROR_RESPONCE.unauthorized());
  }
};
