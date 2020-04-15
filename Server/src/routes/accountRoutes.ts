import { Router } from 'express';
import { accountController } from '../controllers/accountController';
import { tokenValidation} from '../libs/validateToken'

class AccountRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/analisis/account/get-saldo/:cuenta', accountController.getSaldo);
        this.router.post('/analisis/account/create-account', accountController.CreateAccount);

    }

}

const accountRoutes = new AccountRoutes();
export default accountRoutes.router;