import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { BODYPARSER, LOGGER } from '../app-config';

export default app => {
  app.use(bodyParser.json(BODYPARSER.JSON));
  app.use(bodyParser.urlencoded(BODYPARSER.URLENCODED));
  app.use(morgan(LOGGER));
  app.use(cookieParser());
};
