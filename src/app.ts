import express from 'express';
import path from "path";
import router from './router';
import routerAdmin from './routerAdmin';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import { T } from './libs/types/common';

const MongoBStore = ConnectMongoDB(session);
const store = new MongoBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',
})

// 1-ENTERANCE
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));


// 2-SESSIONS 
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        store: store,
        resave: true,
        saveUninitialized: true
    })
)

app.use(function(req,res,next){
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    
    next();
});


// 3-VIEWS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 4-ROUTES
app.use("/", router);//Middlewware Design Pattern, SPA
app.use("/admin", routerAdmin); //BSSR



export default app;