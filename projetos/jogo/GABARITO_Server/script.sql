CREATE DATABASE PCII_DB;
USE PCII_DB;

CREATE TABLE cor(
    id INT IDENTITY(1, 1),
    nome VARCHAR(100) NOT NULL UNIQUE,
    hexadecimal CHAR(7),
    PRIMARY KEY(id)
);

CREATE TABLE carro(
    id INT IDENTITY(1,1),
    cor_id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    ano INT NOT NULL,
    quantidade_de_portas INT NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT FK_Carro_Cor
    FOREIGN KEY (cor_id) REFERENCES cor(id)
);

INSERT INTO cor (nome, hexadecimal) VALUES 
('Preto', '#000000'),
('Branco', '#FFFFFF'),
('Cinza', '#808080'),
('Vermelho', '#FF0000'),
('Azul', '#0000FF'),
('Verde', '#008000'),
('Amarelo', '#FFFF00'),
('Rosa', '#FFC0CB'),
('Laranja', '#FFA500'),
('Roxo', '#800080'),
('Marrom', '#A52A2A'),
('Turquesa', '#40E0D0'),
('Ciano', '#00FFFF'),
('Magenta', '#FF00FF'),
('Ouro', '#FFD700'),
('Prata', '#C0C0C0');