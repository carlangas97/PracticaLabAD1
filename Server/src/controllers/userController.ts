import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"
import { blacklist} from '../libs/listblack'

class UserController {

    public async createuser(req: Request, res: Response) : Promise<void>{
        const DPI = req.body.DPI;
        const nombre = req.body.nombre;
        const apellidos = req.body.apellidos;
        const correo = req.body.correo;
        const pass = req.body.pass;
        const tipo_usuario = req.body.tipo_usuario;
        const no_cuenta = req.body.no_cuenta;
        const monto = req.body.monto;
        const a = 100000000;
        const b = 999999999;
        const codigo = Math.round(Math.random()*(b-a)+a);
        await pool.query('INSERT INTO practica.Usuario (DPI,nombre,apellidos,correo,pass,tipo_usuario) values(?,?,?,?,?,?)',
            [DPI,nombre,apellidos,correo,pass,tipo_usuario]);

        const comando = 'INSERT INTO practica.Cuenta (codigo_usuario,DPI,no_cuenta,saldo_cuenta) values('+codigo+','+DPI+','+no_cuenta+','+monto+')'
        await pool.query(comando, function sync(err: Error) {
            if (!err) {
                res.json({'message': 'Se guardo el usuario'});
            } else {
                res.json({'message': err});
            }
        });
    }

    public async listuser(req: Request ,res:Response){
        const users = await  pool.query('SELECT * from practica.Usuario');
        res.json(users);
    }

    public async listone (req: Request ,res:Response){
        const {id} =req.params;
        const users = await  pool.query('SELECT * from practica.Usuario where DPI=?',[id]);
        res.json(users);
    }

    public async userLogin (req: Request ,res:Response){
        
        const users = await  pool.query('SELECT * from practica.Usuario where DPI=? and pass = ?',
        [req.body.DPI, req.body.pass]);

        if(users.length > 0 ){
            const resp = await pool.query('SELECT * from practica.Cuenta WHERE DPI=?', [req.body.DPI])
            res.json(resp);
        }
        else{
            res.send(false);
        }
        
    }
}

export const userController = new UserController();