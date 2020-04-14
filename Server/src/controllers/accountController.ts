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

    public async CreateAccount(req: Request, res: Response){
        const DPI = req.body.DPI;
        const no_cuenta = req.body.no_cuenta;
        const monto = req.body.monto;
        const a = 1000000000;
        const b = 9999999999;
        const codigo = Math.round(Math.random()*(b-a)+a);
        pool.query('INSERT INTO practica.Cuenta (codigo_usuario,DPI,no_cuenta,saldo_cuenta) values(?,?,?,?)',
            [codigo, DPI, no_cuenta, monto]);
        console.log(req.body);
        res.json({message:'usuario registrado'});

    }
}

export const accountController = new AccountController();