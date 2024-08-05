import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const OrderPortion = sequelize.define('OrderPortion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: DataTypes.FLOAT,
  orderId: DataTypes.INTEGER,
  nDup: DataTypes.STRING,
  dVenc: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  tableName: 'orderportions',
  timestamps: true,
});

OrderPortion.associate = (models) => {
  OrderPortion.belongsTo(models.Order, { foreignKey: 'orderId', as: 'order' });
};

export default OrderPortion;