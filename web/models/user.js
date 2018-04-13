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

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

export default mongoose.model('User', UserSchema);
