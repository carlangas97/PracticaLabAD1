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
        //this.router.post('/analisis/account/create-account', accountController.CreateAccount);
        
 this.router.get('/analisis/account/get-cuenta', accountController.getCuenta);
 this.router.post('/analisis/transferencia', accountController.maketransaction);



    }

}

const accountRoutes = new AccountRoutes();
export default accountRoutes.router;