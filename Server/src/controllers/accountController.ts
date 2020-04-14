import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"
import { blacklist} from '../libs/listblack'

class AccountController {

    public async getSaldo(req: Request ,res:Response){
        const {cuenta} = req.params;

        const users = await  pool.query('SELECT saldo_cuenta from practica.Cuenta where no_cuenta=?',
        [cuenta]);

        if(users.length > 0 ){
            res.json(users);
        }
        else{
            res.send(false);
        }
        
    }
}

export const accountController = new AccountController();