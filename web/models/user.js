import mongoose, { Schema } from 'mongoose';

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
  googleId: {
    type: String,
    unique: true
  },
  facebookId: {
    type: String,
    unique: true
  }
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
