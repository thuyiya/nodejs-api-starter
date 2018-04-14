import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    index: true,
    trim: true
  },
  displayName: String,
  name: {
    givenName: String,
    familyName: String
  },
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  password: {
    type: String
  },
  googleId: {
    type: String,
    unique: true
  },
  facebookId: {
    type: String,
    unique: true
  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

UserSchema.pre('save', async function (next) {
  /**
   * Login method
   */
  if (this.method !== 'local') {
    return next();
  }

  /**
   * Ref for user
   */

  let user = this;

  /**
   * Check is password modified
   */

  if (this.isModified('password') || this.isNew) {
    /**
     * Genarate salt
     */

    bcrypt.genSalt(10, function (err, salt) {
      /**
       * Check If Salt Error
       */
      if (err) {
        return next(err);
      }

      /**
       * Hash the password
       */
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        /**
         * Check if hash error
         */
        if (err) {
          return next(err);
        }

        /**
         * Set Hash value to password
         */
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compareSync(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  delete obj.created_at;
  delete obj.updated_at;
  return obj;
};

export default mongoose.model('User', UserSchema);
