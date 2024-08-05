import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Buyer = sequelize.define('Buyer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  tradingName: DataTypes.STRING,
  cashforceTax: DataTypes.STRING,
  responsibleName: DataTypes.STRING,
  responsibleEmail: DataTypes.STRING,
  responsiblePosition: DataTypes.STRING,
  responsiblePhone: DataTypes.STRING,
  responsibleMobile: DataTypes.STRING,
  website: DataTypes.STRING,
  postalCode: DataTypes.STRING,
  address: DataTypes.STRING,
  number: DataTypes.STRING,
  complement: DataTypes.STRING,
  neighborhood: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cnpjId: DataTypes.INTEGER,
  confirm: DataTypes.BOOLEAN,
  email: DataTypes.STRING,
}, {
  tableName: 'buyers',
  timestamps: true,
});

Buyer.associate = (models) => {
  Buyer.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
};

export default Buyer;