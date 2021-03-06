import express, {Application} from 'express';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes';
import accountRoutes from './routes/accountRoutes'
import transferRoutes from './routes/transferRoutes'

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3500);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/', userRoutes);
        this.app.use('/', accountRoutes);
        this.app.use('/', transferRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'))
        })
    }
}

const server = new Server();
server.start();