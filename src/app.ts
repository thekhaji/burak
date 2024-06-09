import express from 'express';
import path from "path";
import router from './router';
import routerAdmin from './routerAdmin';

// 1-ENTERANCE
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// 2-SESSIONS



// 3-VIEWS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 4-ROUTES
app.use("/", router);//MIddlewware Design Pattern
app.use("/admin", routerAdmin);



export default app;