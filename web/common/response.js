const ERROR_RESPONCE = {
  unauthorized: e => {
    return {
      code: 4010,
      message: 'Unauthorized access',
      success: false,
      data: e
    };
  },

  validation: e => {
    return {
      code: 4011,
      message: 'Validation error occur.',
      success: false,
      data: e
    };
  },

  contentNotFound: e => {
    return {
      code: 4012,
      message: 'Mongo content error occur.',
      success: false,
      data: e
    };
  },
  serverError: e => {
    return {
      code: 5000,
      message: 'Internal Serve Error',
      success: false,
      data: e
    };
  }
};

const SUCCESS_RESPONCE = {
  success: s => {
    return {
      code: 2001,
      message: 'Successful',
      success: true,
      data: s
    };
  },
  exist: s => {
    return {
      code: 4220,
      message: 'Data Exist',
      success: false,
      data: s
    };
  }
};

export {
  ERROR_RESPONCE,
  SUCCESS_RESPONCE
};
