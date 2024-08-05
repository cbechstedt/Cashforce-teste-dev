import app from './app.js';
import db from './model/index.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await db.initializeDatabase(); 
    console.log('Database initialized successfully.');

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to initialize the database:', error);
  }
};

startServer();
