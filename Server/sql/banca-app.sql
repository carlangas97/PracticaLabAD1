CREATE DATABASE practica;

USE practica;

CREATE TABLE Tipo_Usuario(
idtipo_usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
nombre_tipo VARCHAR(50)
);

INSERT INTO Tipo_Usuario (nombre_tipo) VALUES ('Adminstrador');
INSERT INTO Tipo_Usuario (nombre_tipo) VALUES ('Usuario');

CREATE TABLE Usuario(
DPI BIGINT PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
apellidos VARCHAR(100) NOT NULL,
correo VARCHAR(150) NOT NULL,
pass VARCHAR(60) NOT NULL,
tipo_usuario INT,
FOREIGN KEY (tipo_usuario) REFERENCES Tipo_Usuario(idtipo_usuario)
);

CREATE TABLE Cuenta(
codigo_usuario INTEGER PRIMARY KEY,
DPI BIGINT,
no_cuenta BIGINT UNIQUE,
saldo_cuenta FLOAT NOT NULL,
FOREIGN KEY (DPI) REFERENCES Usuario (DPI)
);

CREATE TABLE Transferencias(
idTransferencia INTEGER PRIMARY KEY AUTO_INCREMENT,
codigo_salida INTEGER NOT NULL,
codigo_entrada INTEGER NOT NULL,
monto FLOAT NOT NULL,
fecha DATE NOT NULL,
FOREIGN KEY (codigo_salida) REFERENCES Cuenta (codigo_usuario),
FOREIGN KEY (codigo_entrada) REFERENCES Cuenta (codigo_usuario)
)
