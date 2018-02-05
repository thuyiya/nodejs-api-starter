import { SUCCESS_RESPONCE } from '../common/response';

export const login = async (req, res) => {
  return res.status(200).json(SUCCESS_RESPONCE.success('login'));
};
