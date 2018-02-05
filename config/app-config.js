const application = {
  TIME_ZONE: 'Asia/Colombo',
  TIME_FORMAT: 'DD-MM-YYYY hh:mm'
};

const BODYPARSER = {
  JSON: {
    limit: '50mb'
  },
  URLENCODED: {
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
  }
};

const LOGGER = 'dev'; // ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

application.ROUTE = {
  apiPrefix: '/v1',
  authlogin: '/auth/login'
};

export {
  BODYPARSER,
  LOGGER,
  application
};
