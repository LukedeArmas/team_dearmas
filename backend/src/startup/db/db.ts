import { Sequelize } from "sequelize";


export default async function connectDb() {
  const sequelize = new Sequelize(process.env.URI);

  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL database established successfully');
  } catch(e) {
    throw new Error(`Failed to connect to PostgreSQL database: ${e}`);
  }
}