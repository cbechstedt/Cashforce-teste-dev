import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  mobile: DataTypes.STRING,
  departament: DataTypes.STRING,
  verificationCode: DataTypes.STRING,
  emailChecked: DataTypes.BOOLEAN,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cashforceAdm: DataTypes.BOOLEAN,
}, {
  tableName: 'users',
  timestamps: true,
});

User.associate = (models) => {
  User.hasMany(models.Order, { foreignKey: 'userId', as: 'orders' });
};

export default User;