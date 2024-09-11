CREATE DATABASE Jogo;
USE Jogo;

/* Lógico_1: */

CREATE TABLE Personagem (
    personagem_ID INT PRIMARY KEY,
    nome VARCHAR,
    vidaMax INT,
    vidaAtual INT,
    forca INT,
    agilidade INT,
    mana INT
);

CREATE TABLE Arma (
    arma_ID INT PRIMARY KEY,
    forca INT,
    descricao VARCHAR
);

CREATE TABLE Sala (
    sala_ID INT PRIMARY KEY,
    tipo VARCHAR
);

CREATE TABLE Andar (
    andar_ID INT PRIMARY KEY,
    quantidade_salas INT,
    andar_salas_ID FOREIGN KEY 
    REFERENCES Sala(sala_ID) --aqui eu quis dizer que um andar tera várias salas, que seram representadas pelo id
);

CREATE TABLE Chave (
    chave_ID INT PRIMARY KEY
);

CREATE TABLE Pocao (
    pocao_ID INT PRIMARY KEY,
    efeito VARCHAR
);

CREATE TABLE Monstro (
    monstro_ID INT PRIMARY KEY,
    vidaMax INT,
    vidaAtual INT,
    forca INT,
    agilidade INT
);