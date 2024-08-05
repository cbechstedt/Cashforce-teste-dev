import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Sponsor = sequelize.define('Sponsor', {
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
  bank: DataTypes.STRING,
  bankAgency: DataTypes.STRING,
  account: DataTypes.STRING,
  documents: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  situation: DataTypes.STRING,
  situationDate: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cnpjId: DataTypes.INTEGER,
  email: DataTypes.STRING,
}, {
  tableName: 'sponsors',
  timestamps: true,
});

Sponsor.associate = (models) => {
  Sponsor.belongsTo(models.Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
};

export default Sponsor;