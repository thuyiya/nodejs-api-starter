/* eslint-disable no-console */
import express from 'express';
import DotEnv from 'dotenv';
import { router } from './routes';
import { HeaderAccessControl, Passport } from './middleware/';
import cookieSession from 'cookie-session';
import { Logger, application, DatabaseConfig } from '../config';
// import { GoogleConfig, FacebookConfig, PassportInit, PassportSession } from './middleware/passport';

const app = express();
const expressRoute = express.Router();

DotEnv.config();

Logger(app);
DatabaseConfig();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [application.SESSION_KEY]
}));

// initilaize passport
app.use(Passport.init);
app.use(Passport.session);

Passport.FacebookConfig();
Passport.GoogleConfig();

app.use(application.ROUTE.apiDoc, express.static('public/apidoc'));

app.use(application.ROUTE.apiPrefix, HeaderAccessControl, router(expressRoute));

exports.app = app;
