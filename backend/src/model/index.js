import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from '../database/config.js';
import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const db = {};

// Função para criar o banco de dados se não existir
const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_DATABASE}\`;`);
  await connection.end();
};

// Função para importar modelos
const importModels = async () => {
  const modelFiles = fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js');

  const modelPromises = modelFiles.map(async file => {
    const { default: Model } = await import(path.join(__dirname, file));
    const modelInstance = new Model(sequelize, Sequelize.DataTypes);
    return { name: modelInstance.name, model: modelInstance };
  });

  const models = await Promise.all(modelPromises);

  models.forEach(({ name, model }) => {
    db[name] = model;
  });
};

// Associar modelos
const associateModels = () => {
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
};

// Inicializar o banco de dados
const initializeDatabase = async () => {
  try {
    await createDatabase();
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Importar modelos
    await importModels();

    // Associar modelos
    associateModels();

    // Sincronizar modelos com o banco de dados
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');

    console.log('Database setup completed.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

db.initializeDatabase = initializeDatabase;

export default db;