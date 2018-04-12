import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import FacebookStrategy from 'passport-facebook';

import { User } from '../models';
import { Config } from '../../config/';
// import { ERROR_RESPONCE, SUCCESS_RESPONCE } from '../utils'

module.exports = {
  init: passport.initialize(),

  session: passport.session(),

  GoogleConfig: () => {
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });

    passport.use(
      new GoogleStrategy(Config.ENV_CONFIGARATION[process.env.NODE_ENV].google, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
          .exec((err, currentUser) => {
            if (err) {
              return done(err, null);
            }

            if (currentUser) {
              return done(null, currentUser);
            }

            User.create({
              displayName: profile.displayName,
              name: profile.name,
              googleId: profile.id
            }, (err, newUser) => {
              if (err) {
                return done(err, null);
              }

              return done(null, newUser);
            });
          });
      })
    );
  },
  FacebookConfig: () => {
    passport.use(new FacebookStrategy(Config.ENV_CONFIGARATION[process.env.NODE_ENV].facebook,
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ facebookId: profile.id })
          .exec((err, currentUser) => {
            if (err) {
              return done(err, null);
            }

            if (currentUser) {
              return done(null, currentUser);
            }

            User.create({
              displayName: profile.displayName,
              name: profile.name,
              facebookId: profile.id
            }, (err, newUser) => {
              if (err) {
                return done(err, null);
              }

              return done(null, newUser);
            });
          });
      }
    ));
  }
};
