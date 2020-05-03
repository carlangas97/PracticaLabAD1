import { Router } from 'express';
import { transferController } from '../controllers/transferController';
import { tokenValidation} from '../libs/validateToken'

class TransferRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/analisis/transfer/general-report', transferController.general_report);
        this.router.get('/analisis/transfer/account-report/:cuenta', transferController.account_report);
    }

}

const transferRoutes = new TransferRoutes();
export default transferRoutes.router;