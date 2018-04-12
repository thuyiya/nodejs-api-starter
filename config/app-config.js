import DotEnv from 'dotenv';

DotEnv.config();

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

const ENV_CONFIGARATION = {
  dev: {
    notification: {
      auth: '',
      appId: ''
    },
    appSecret: {
      jwt: ''
    },
    email: {
      host: '',
      pass: ''
    },
    image_server: {
      cloudinaryApiKey: '252352352523523',
      cloudinaryApiSecret: '23rf2f23f23f23f2332r-234'
    },
    google: {
      clientID: '345-3453.apps.googleusercontent.com',
      clientSecret: '34t34t3',
      callbackURL: 'http://localhost:3000/v1/auth/google/callback'
    },
    facebook: {
      clientID: '34534543',
      clientSecret: '3453434f34g34g34g34',
      callbackURL: 'http://localhost:3000/v1/auth/facebook/callback'
    }
  },
  prod: {
    notification: {
      auth: '',
      appId: ''
    },
    appSecret: {
      jwt: ''
    },
    email: {
      host: '',
      pass: ''
    },
    image_server: {
      cloudinaryApiKey: '252352352523523',
      cloudinaryApiSecret: '23rf2f23f23f23f2332r-234'
    },
    google: {
      clientID: '23423-234234.apps.googleusercontent.com',
      clientSecret: 'DOAY234234v90PYObc85Vr76EaGh89',
      callbackURL: 'http://localhost:3000/v1/auth/google/callback'
    },
    facebook: {
      clientID: '234234',
      clientSecret: '30b61df3369f869992342342343daae7263d987f2',
      callbackURL: 'http://localhost:3000/v1/auth/facebook/callback'
    }
  },
  staging: {
    notification: {
      auth: '',
      appId: ''
    },
    appSecret: {
      jwt: ''
    },
    email: {
      host: '',
      pass: ''
    },
    image_server: {
      cloudinaryApiKey: '252352352523523',
      cloudinaryApiSecret: '23rf2f23f23f23f2332r-234'
    },
    google: {
      clientID: '243242-werwe.apps.googleusercontent.com',
      clientSecret: '23432423',
      callbackURL: 'http://localhost:3000/v1/auth/google/callback'
    },
    facebook: {
      clientID: '2343242',
      clientSecret: '234423',
      callbackURL: 'http://localhost:3000/v1/auth/facebook/callback'
    }
  },
  uat: {
    notification: {
      auth: '',
      appId: ''
    },
    appSecret: {
      jwt: ''
    },
    email: {
      host: '',
      pass: ''
    },
    image_server: {
      cloudinaryApiKey: '252352352523523',
      cloudinaryApiSecret: '23rf2f23f23f23f2332r-234'
    },
    google: {
      clientID: '23423-234234.apps.googleusercontent.com',
      clientSecret: '23423423',
      callbackURL: 'http://localhost:3000/'
    },
    facebook: {
      clientID: '23423423',
      clientSecret: '23432423423',
      callbackURL: 'http://localhost:3000/v1/auth/google/callback'
    }
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
  application,
  ENV_CONFIGARATION
};
