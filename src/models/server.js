import path from "path";
import express from "express";
import engine from "ejs-mate";
import cookieParser from 'cookie-parser'
import cors from  'cors'
import { fileURLToPath } from "url";
import {
  routerAuth,
  routerUser,
  routerCart,
  routerProducts,
  routerTemplates
} from "../routes/index.js";

import { dbConnection } from "../database/db.js";
import Config from "../config/config.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Server {
  constructor() {
    this.app = app;
    this.PORT = Config.PORT;
    this.path = {
      carrito: "/api/carritos",
      productos: "/api/products",
      login: "/api/auth",
      registrar: "/api/user",
      templates: '/templates'
    };

    this.middlewares();
    this.CrearConexionBD();
    this.router();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser())
    this.app.use(cors())

    this.app.set("views", path.join(__dirname, "../views"));
    this.app.engine("ejs", engine);
    this.app.set("view engine", "ejs");
    this.app.use(express.static(path.join(__dirname, "../views")));
  }

  async CrearConexionBD() {
    await dbConnection();
  }

  router() {
    this.app.use((req, res, next) => {
      app.locals.user = req.user;
      next();
    });

    this.app.use(this.path.registrar, routerUser);
    this.app.use(this.path.login, routerAuth);
    this.app.use(this.path.productos, routerProducts);
    this.app.use(this.path.carrito, routerCart);
    this.app.use(this.path.templates, routerTemplates);
    // this.app.use('*', (req, res) => {
    //     res.render('failpage')
    // })
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`escuchando el puerto ${this.PORT}`);
    });
  }
}

export default Server;
