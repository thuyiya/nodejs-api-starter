import { APP } from '../../../config';
import Auth from './auth-routes';

module.exports = (router) => {
  // Api Statues
  router.route('/').get(function (req, res) {
    res.status(200).json({ code: 2000, message: APP.name + ' api version' + APP.version });
  });

  Auth.setupRoute(router);

  router.use(function (req, res, next) {
    var err = {};
    err.status = 404;
    err.message = 'EndPoint Not Found';
    next(err);
  }); // catch 404 and forward to error handler

  router.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
  }); // If our applicatione encounters an error, we'll display the error and stacktrace accordingly

  return router;
};
