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
class AccountController {
    getSaldo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cuenta } = req.params;
            const users = yield database_1.default.query('SELECT saldo_cuenta from practica.Cuenta where no_cuenta=?', [cuenta]);
            if (users.length > 0) {
                res.json(users);
            }
            else {
                res.send(false);
            }
        });
    }
    getCuenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * from practica.Cuenta ');
            res.json(users);
            res.send(false);
        });
    }
    maketransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuenta1 = req.body.cuenta1;
            const cuenta2 = req.body.cuenta2;
            const monto = req.body.monto;
            const filas = yield database_1.default.query('UPDATE practica.Cuenta SET saldo_cuenta=saldo_cuenta-?  WHERE no_cuenta=?  ', [monto, cuenta1]);
            // res.json({ message: 'debito realizado' });
            if (filas != null) {
                const filas2 = yield database_1.default.query('UPDATE practica.Cuenta SET saldo_cuenta=saldo_cuenta+?  WHERE no_cuenta=?  ', [monto, cuenta2]);
                if (filas2 != null) {
                    res.json({ message: 'transferencia realizada' });
                }
                else {
                    res.send(false);
                }
            }
            else {
                res.send(false);
            }
        });
    }
}
exports.accountController = new AccountController();
