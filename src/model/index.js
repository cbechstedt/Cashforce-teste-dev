import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from '../database/config.js';
import { Sequelize } from 'sequelize';
import { readQueries } from '../database/queryUtils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Criar e usar o banco de dados
    await sequelize.query('CREATE DATABASE IF NOT EXISTS cashforce_v3;', { raw: true });
    await sequelize.query('USE cashforce_v3;', { raw: true });

    // Ler e separar o script SQL
    const queries = readQueries();
    const queriesArray = queries.split(';').filter(query => query.trim() !== '');

    // Sincronizar modelos com o banco de dados
    await sequelize.sync({ alter: true });

    console.log('Database synchronized successfully.');

    // // Executar cada consulta individualmente
    // for (const query of queriesArray) {
    //   if (query.trim() !== '') {
    //     await sequelize.query(query, { raw: true });
    //   }
    // }

    console.log('Database setup completed.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

db.initializeDatabase = initializeDatabase;

export default db;
