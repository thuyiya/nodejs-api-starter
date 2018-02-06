/* eslint-disable no-console */
import express from 'express';
import DotEnv from 'dotenv';
import { router } from './routes';
import { HeaderAccessControl } from './middleware/';
import { Logger, application, DatabaseConfig } from '../config';

const app = express();
const expressRoute = express.Router();

DotEnv.config();

Logger(app);
DatabaseConfig();

app.use(application.ROUTE.apiDoc, express.static('public/apidoc'));

app.use(application.ROUTE.apiPrefix, HeaderAccessControl, router(expressRoute));

exports.app = app;
