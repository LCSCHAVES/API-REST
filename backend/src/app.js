import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';


class App{
  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://lucaschaves190699:VtbADM95N4rJyvaF@devhouse.xqhvkba.mongodb.net/?retryWrites=true&w=majority&appName=DevHouse');

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }
  routes(){
    this.server.use(routes);
  }

}

export default new App().server;