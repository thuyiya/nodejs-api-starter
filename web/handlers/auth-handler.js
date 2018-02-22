import passport from 'passport';
import { SUCCESS_RESPONCE } from '../common/response';

export const login = async (req, res) => {
  return res.status(200).json(SUCCESS_RESPONCE.success('login'));
};

export const googleAuth = passport.authenticate('google', {
  scope: ['profile']
});

export const facebookAuth = passport.authenticate('facebook', {
  authType: 'rerequest', scope: ['user_friends', 'manage_pages']
});

export const googleCallback = async (req, res) => {
  return res.status(200).json(req.user);
};

export const facebookCallback = async (req, res) => {
  return res.status(200).json(req.user);
};

export const logout = async (req, res) => {
  req.login();
  return res.status(200).json(SUCCESS_RESPONCE.success('Logging out'));
};
