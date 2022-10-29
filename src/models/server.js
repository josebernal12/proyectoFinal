import path, { dirname } from "path";
import express from "express";
import engine from "ejs-mate";
import multer from 'multer';
import { Server as server } from 'socket.io'
import cookieParser from "cookie-parser";
import { createServer } from 'http'
import cors from "cors";
import { fileURLToPath } from "url";
import {
  routerAuth,
  routerUser,
  routerCart,
  routerProducts,
  routerTemplates,
  routerCategory,
  routerSearch
} from "../routes/index.js";

import { dbConnection } from "../database/db.js";
import Config from "../config/config.js";
import { socketsController } from "../sockets/sockets.controllers.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class Server {
  constructor() {
    this.app = app;
    this.PORT = Config.PORT;
    this.server = createServer(this.app)
    this.io = new server(this.server)
    this.path = {
      carrito: "/api/carts",
      productos: "/api/products",
      login: "/api/auth",
      registrar: "/api/user",
      templates: "/templates",
      category: '/api/category',
      search: '/search'
    };

    this.middlewares();
    this.CrearConexionBD();
    this.router();
    this.socket()
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(cors());
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
    this.app.use(this.path.category, routerCategory)
    this.app.use(this.path.templates, routerTemplates);
    this.app.use(this.path.search, routerSearch);
    this.app.use('*', (req, res) => {
      res.render('errors/failpage')
    })
  }

  socket() {
    this.io.on('connection', (socket) => socketsController(socket, this.io))

  }

  listen() {
    this.server.listen(this.PORT, () => {
      console.log(`escuchando el puerto ${this.PORT}`);
    });
  }
}

export default Server;
