import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';
import Buyer from './Buyer.js';
import Provider from './Provider.js';
import Cnpj from './Cnpj.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNfId: DataTypes.STRING,
  orderNumber: DataTypes.STRING,
  orderPath: DataTypes.STRING,
  orderFileName: DataTypes.STRING,
  orderOriginalName: DataTypes.STRING,
  emissionDate: DataTypes.DATE,
  pdfFile: DataTypes.STRING,
  emitedTo: DataTypes.STRING,
  nNf: DataTypes.STRING,
  CTE: DataTypes.STRING,
  value: DataTypes.FLOAT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
  cnpjId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER,
  buyerId: DataTypes.INTEGER,
  providerId: DataTypes.INTEGER,
  orderStatusBuyer: DataTypes.STRING,
  orderStatusProvider: DataTypes.STRING,
  deliveryReceipt: DataTypes.STRING,
  cargoPackingList: DataTypes.STRING,
  deliveryCtrc: DataTypes.STRING,
}, {
  tableName: 'orders',
  timestamps: true,
});

Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });

export default Order;