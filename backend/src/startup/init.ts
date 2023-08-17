import { Express } from 'express'
import dotenv from 'dotenv';
import createServer from './server';


export default async function init() {
  dotenv.config();
  const PORT = process.env.PORT;

  // Connect to DB here

  console.log('Starting server');
  const app: Express = createServer();

  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  })

}