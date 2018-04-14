import { User } from '../models';

class UserServices {
  async createUser (userObject) {
    try {
      return await User.create(userObject);
    } catch (e) {
      throw e;
    }
  };

  async getUserById (id) {
    try {
      return await User.findById(id);
    } catch (e) {
      throw e;
    }
  }
}

export default new UserServices();
