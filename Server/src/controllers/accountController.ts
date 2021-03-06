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

    public async getCuenta(req: Request, res: Response) {
        
            
            const users = await pool.query('SELECT * from practica.Cuenta ');

                res.json(users);


                res.send(false);

      
    }

    public async getTipo(req: Request, res: Response){
        const {cuenta} = req.params;
        const user = await pool.query('SELECT tipo_usuario FROM practica.Usuario WHERE DPI=?',[cuenta])
        if(user.length > 0 ){
            res.json(user);
        }
        else{
            res.send(false);
        }
    }


public async maketransaction(req: Request, res: Response) {
        
            const cuenta1 = req.body.cuenta1;
            const cuenta2 = req.body.cuenta2;
            const monto = req.body.monto;

            const fecha =  new Date()

            const filas = await pool.query('UPDATE practica.Cuenta SET saldo_cuenta=saldo_cuenta-?  WHERE codigo_usuario=?  ',[monto,cuenta1]);

               // res.json({ message: 'debito realizado' });
            if (filas!=null) {
               const filas2= await pool.query('UPDATE practica.Cuenta SET saldo_cuenta=saldo_cuenta+?  WHERE codigo_usuario=?  ',[monto,cuenta2]);
                if(filas2!=null){
                   await pool.query('INSERT INTO practica.Transferencias (codigo_salida, codigo_entrada, monto,fecha) VALUES(?,?,?,?)', [cuenta1,cuenta2,monto,fecha])
                    res.json({ message: 'transferencia realizada' });
                }else{
                    res.send(false);
                }
            }
            else {
                res.send(false);

            }
      


    }
}

export const accountController = new AccountController();