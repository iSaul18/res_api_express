const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = require("express")();
        this.port = process.env.PORT || 8080;
        this.paths = {
            user: "/api/users",
        };

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.static("public"));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.user, require("../routes/users.routes.js"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port " + this.port);
        });
    }
}

module.exports = Server;
