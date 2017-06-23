let express = require("express");
let body_parser = require("body-parser");
let mongoose = require('mongoose');
let ws = require('ws');

let config = require("./config/app.config.js");

let port = process.env.PORT || config.port;

let app = express();

let mainRouter = require("./routing/API/generic/generic.api.route.js");
let visitorRouter = require("./routing/API/visitor/visitor.route");
let buyerRouter = require("./routing/API/buyer/buyer.route");

let logger = require("./class/logger.js");

let DbInit = require("./class/db.init.js").init;

mongoose.connect(process.env.MONGODB_URI || config.dbURL);

//_____________________________________________________________________________
app.use(body_parser.json()); // for parsing application/json
app.use(body_parser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/api/general", mainRouter);
app.use("/api/visitor", visitorRouter);
app.use("/api/buyer", buyerRouter);

app.use((err, req, res, next) => {
    if (err) {
        return next(err);
    }
});

app.use(logger.errorLogger);


let server = app.listen(port, () => {
    console.log('Kattegat  is listening to .....' + port);
    DbInit();
});



