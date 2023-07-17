const express = require('express');
const cors = require('cors');

class Trading {
    constructor(){
        this.app = express();
        this.middleware();
        this.port = process.env.PORT
        this.tradingPath = "/api/trading";
        this.routes();
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.tradingPath, require('../routes/trading.routes.js'));
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`listening on ${this.port}`);
        })
    }
}

module.exports = Trading;