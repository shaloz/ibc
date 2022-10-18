import bcrypt from 'bcrypt';

/**
 * @param {class}  Password definition
 */
export default class Password {
  /**
   * @param {string} password
   */
  static async toHash(password: string) {
    try {
      const saltRounds = 10;
      const hashed = await bcrypt.hash(password, saltRounds);
      return hashed;
    } catch (err) {
      throw new Error('error hashing');
    }
  }

  /**
   * @param {string} suppliedPassword
   * @param {string} storedPassword
   */
  static async compare(suppliedPassword: string, storedPassword: string) {
    try {
      const decrypted = await bcrypt.compare(suppliedPassword, storedPassword);
      return decrypted;
    } catch (err) {
      throw new Error('error comparing password');
    }
  }
}
