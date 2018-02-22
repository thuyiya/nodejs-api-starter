const application = {
  TIME_ZONE: 'Asia/Colombo',
  TIME_FORMAT: 'DD-MM-YYYY hh:mm',
  SESSION_KEY: '234324b2iu34i23b4i23bi32b4'
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

const MONGOOSE_OPTIONS = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

const PASSPORT = {
  GoogleKeys: {
    clientID: '729744337671-i6h2fo9pdq8v0rqdgqujh5p8fk5hdsup.apps.googleusercontent.com',
    clientSecret: 'DOAYv90PYObc85Vr76EaGh89',
    callbackURL: 'http://localhost:3000/'
  },
  FacebbokKeys: {
    clientID: '166316493821335',
    clientSecret: '30b61df3369f869993daae7263d987f2',
    callbackURL: 'http://localhost:3000/v1/auth/facebook/callback'
  }
};

const LOGGER = 'dev'; // ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

const REGEX = {
  Email: /^[-a-z0-9%S_+]+(\.[-a-z0-9%S_+]+)*@(?:[a-z0-9-]{1,63}\.){1,125}[a-z]{2,63}$/i,
  Password: /\d+/g
};

const COLORS = {
  cyan: '\x1b[36m%s\x1b[0m',
  yellow: '\x1b[33m%s\x1b[0m'
};

application.ROUTE = {
  apiPrefix: '/v1',
  apiDoc: '/v1/apidoc',
  authlogin: '/auth/login'
};

export {
  BODYPARSER,
  LOGGER,
  REGEX,
  COLORS,
  MONGOOSE_OPTIONS,
  PASSPORT,
  application
};
