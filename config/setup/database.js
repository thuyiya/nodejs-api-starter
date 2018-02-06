import mongoose from 'mongoose';
import { COLORS, MONGOOSE_OPTIONS } from '../app-config';

mongoose.Promise = global.Promise;

export default DatabaseConfig => {
  // Build the connection string
  let dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  try {
    mongoose.connect(dbURI, MONGOOSE_OPTIONS, function (ignore, connection) {
      if (ignore) {
        console.log(COLORS.yellow, `Error when try connect to ${dbURI} `);
        return;
      }
      connection.onOpen();
    }).then(() => {
      console.log(COLORS.cyan, 'Database connected!');
    }).catch(e => {
      console.log('Mongo Connection Error');
    });
  } catch (error) {
    mongoose.createConnection(dbURI);
  }

  // mongoose.connection
  //   .once('open', () => console.log('MongoDB running'))
  //   .on('error', e => console.log('MongoDB Error'));

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open initilizing..');
  });

  mongoose.connection.on('error', e => {
    console.log('Mongoose default connection error');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });
};
