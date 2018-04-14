import passport from 'passport';
import JWT from 'jsonwebtoken';

import { Config } from '../../config';
import { SUCCESS_RESPONCE } from '../common/response';

const signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, Config.ENV_CONFIGARATION[process.env.NODE_ENV].appSecret.jwt);
};

export const login = async (req, res) => {
  const token = signToken(req.user);
  return res.status(200).json(SUCCESS_RESPONCE.success(token));
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
  console.log(req.session);
  req.logout();
  return res.status(200).json(SUCCESS_RESPONCE.success('Logging out'));
};
