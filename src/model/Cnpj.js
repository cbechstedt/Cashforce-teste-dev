import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Cnpj = sequelize.define('Cnpj', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    unique: true,
  },
  companyType: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  tableName: 'cnpjs',
  timestamps: true,
});

Cnpj.associate = (models) => {
  Cnpj.hasMany(models.Buyer, { foreignKey: 'cnpjId', as: 'buyers' });
};

export default Cnpj;