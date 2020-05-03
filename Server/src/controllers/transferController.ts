import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"
import { blacklist} from '../libs/listblack'

class TransferController {

    public async general_report(req: Request, res: Response) {
        const transfer = await pool.query('SELECT * from practica.Transferencias');
        res.json(transfer);
    }

    public async account_report(req: Request, res: Response) {
        const {cuenta} = req.params;

        const transfer = await pool.query('SELECT * from practica.Transferencias t '+
        'where t.codigo_salida = ? or t.codigo_entrada = ? ',[cuenta, cuenta]);
        res.json(transfer);
     }

}

export const transferController = new TransferController();