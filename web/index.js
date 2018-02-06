/* eslint-disable no-console */
import express from 'express';
import { router } from './routes';
import { HeaderAccessControl } from './middleware/';
import { Logger, application } from '../config';

const app = express();
const expressRoute = express.Router();

Logger(app);

// app.use(application.ROUTE.apiDoc, express.static('public/apidoc'));

app.use(application.ROUTE.apiPrefix, HeaderAccessControl, router(expressRoute));

exports.app = app;
