import { Express } from 'express';
import 'dotenv/config';
import createServer from './server';


export default async function init() {
  // Connect to DB here

  console.log('Starting server');
  const app: Express = createServer();

  app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
  })

}