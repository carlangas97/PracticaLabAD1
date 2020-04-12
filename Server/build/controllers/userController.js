"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    createuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const DPI = req.body.DPI;
            const nombre = req.body.nombre;
            const apellidos = req.body.apellidos;
            const correo = req.body.correo;
            const pass = req.body.pass;
            const tipo_usuario = req.body.tipo_usuario;
            database_1.default.query('INSERT INTO practica.Usuario (DPI,nombre,apellidos,correo,pass,tipo_usuario) values(?,?,?,?,?,?)', [DPI, nombre, apellidos, correo, pass, tipo_usuario]);
            console.log(req.body);
            res.json({ message: 'usuario registrado' });
        });
    }
    listuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * from practica.Usuario');
            res.json(users);
        });
    }
    listone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * from practica.Usuario where DPI=?', [id]);
            res.json(users);
        });
    }
}
exports.userController = new UserController();
