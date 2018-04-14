import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Config } from '../../config';
import { User } from '../models';

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: Config.ENV_CONFIGARATION[process.env.NODE_ENV].appSecret.jwt
};

const authenticate = passport.authenticate('local', { session: false });

const localStrategys = () => {
  // JSON WEB TOKENS STRATEGY
  passport.use(new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
      // Find the user specified in token
      const user = await User.findById(payload.sub);

      // If user doesn't exists, handle it
      if (!user) {
        return done(null, false);
      }

      // Otherwise, return the user
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }));

  // LOCAL STRATEGY
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    try {
      // Find the user given the email
      const user = await User.findOne({ 'email': email });

      // If not, handle it
      if (!user) {
        return done(null, false);
      }

      // Check if the password is correct
      const isMatch = await user.isValidPassword(password);
      console.log(isMatch);
      // If not, handle it
      if (!isMatch) {
        return done(null, false);
      }

      // Otherwise, return the user
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }));
};

export {
  authenticate,
  localStrategys
};
