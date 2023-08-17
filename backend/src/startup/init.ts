import { Express } from 'express';
import 'dotenv/config';
import createServer from './server';
import connectDb from './db/db'


export default async function init() {
  await connectDb();

  console.log('Starting server');
  const app: Express = createServer();

  app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
  })

}