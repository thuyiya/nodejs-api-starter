import Joi from 'joi';
import { ERROR_RESPONCE } from '../common/response';

module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        delete result.error.isJoi;
        delete result.error.name;
        return res.status(400).json(ERROR_RESPONCE.validation(result.error));
      }

      if (!req.value) { req.value = {}; }
      req.value['body'] = result.value;
      next();
    };
  },

  schemas: {
    userCreateSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().alphanum().min(3).max(30).required()
    }),
    authLoginSchema: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().alphanum().min(3).max(30).required()
    })
  }
};
