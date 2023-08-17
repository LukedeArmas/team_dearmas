import express, { Express } from 'express';
import { errorHandler } from '../middleware/errorhandler';


export default function createServer() {
  const app: Express = express();

  // Set up injector here

  // Configure routes here

  app.use(errorHandler);
  return app;
}