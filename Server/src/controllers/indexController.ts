import { Request, Response} from 'express';

import pool from '../database'
import jwt from "jsonwebtoken"
import { blacklist} from '../libs/listblack'

class IndexController {

    public index(req: Request, res: Response) {
       res.json("Conectado");
    }

}

export const indexController = new IndexController();