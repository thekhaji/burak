import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import app from './app';




mongoose.connect(process.env.MONGO_URL as string, {})
    .then((data)=>{
        console.log("MongoDB connection succeed");
        const PORT = process.env.PORT ?? 3077;
        app.listen(PORT, function(){
            console.info(`The server is running successfully on port ${PORT}`);
            console.info(`Admin project on http://localhost:${PORT}/admin \n`);
        })    
    })
    .catch((err)=>{
        console.log("ERROR on connection MongoDB", err);
        
    });

/*Architectural pattern: MVC(Model View Controller). DI(Dependency Injection), MVP(Mode View Presenter)
    Backend dagi ma'lumotlar oqimini tartibga soladigon bir arxitektura/vositachi
    Suyagi
*/


/*Design patter: Middleware, Decorator(PIPE, GUARDD,)
    Ma'lum bir bolaklarni strukturasini yechishda hizmat qiladigon pattern
    Qo'lining suyagi
*/