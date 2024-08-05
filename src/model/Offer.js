import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const Offer = sequelize.define('Offer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sponsorId: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  tableName: 'offers',
  timestamps: true,
});

Offer.associate = (models) => {
  Offer.belongsTo(models.Sponsor, { foreignKey: 'sponsorId', as: 'sponsor' });
};

export default Offer;