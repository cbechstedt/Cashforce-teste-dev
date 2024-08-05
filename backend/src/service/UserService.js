import User from '../model/User.js';

class UserService {
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message);
    }
  }
}

export default new UserService();
