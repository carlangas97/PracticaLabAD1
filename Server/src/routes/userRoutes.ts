import { Router } from 'express';
import { userController } from '../controllers/userController';
import { tokenValidation} from '../libs/validateToken'

class UserRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.post('/analisis/create-user', userController.createuser);
        this.router.get('/analisis/list-user', userController.listuser);
        this.router.get('/analisis/list-user/:id', userController.listone);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;