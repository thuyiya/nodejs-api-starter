
import http from 'http';
import { app } from './web';

http.createServer(app).listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${process.env.PORT}`);
  }
});

// graceful shutdown
process.on('SIGTERM', () => {
  // desconect radis and other services
  console.log('Api graceful shutdown');
});

/**
 * CRETAE HTTPS SERVER WITH CERT
 */

// let options = {
//     key: fs.readFileSync('glitch-key.pem'),
//     cert: fs.readFileSync('glitch-cert.pem'),
//     requestCert: false,
//     rejectUnauthorized: false
//   };

// https.createServer(options, app).listen(process.env.PORT, err => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(`App listen to port: ${process.env.PORT}`)
//   }
// })
