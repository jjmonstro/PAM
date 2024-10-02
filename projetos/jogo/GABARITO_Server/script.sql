CREATE DATABASE Jogo;
USE Jogo;

CREATE TABLE Arma (
    arma_ID INT PRIMARY KEY,
    nome VARCHAR (50),
    dano DECIMAL,  
    descricao VARCHAR (350),
    possui BIT
);
 

/*
    eu (correia) coloquei o dano como decimal para que
    o dano que o personagem da seja determinado pela arma que ele usa,
    por exemplo, se ele usa uma arma que tem 1.1 de dano, 
    o dano que ele vai dar no monstro é a força do personagem * dano da arma,
    assim o dano escala com o nível e com a arma, acho que da certo
*/

CREATE TABLE Monstro (
    monstro_ID INT PRIMARY KEY,
    nome VARCHAR (50),
    vidaMax INT,
    vidaAtual INT,
    forca INT,
    agilidade INT
);

CREATE TABLE Pocao (
    pocao_ID INT PRIMARY KEY,
    nome VARCHAR (50),
    ganho_vida INT,
    ganho_nivel INT,
    possui BIT
);

CREATE TABLE Bau (
    bau_id INT PRIMARY KEY,
    pocao_ID INT FOREIGN KEY
    REFERENCES Pocao(pocao_ID),
    arma_ID INT FOREIGN KEY
    REFERENCES Arma(arma_ID)
);

CREATE TABLE Sala (
    sala_ID INT PRIMARY KEY,
    monstro_ID INT FOREIGN KEY
    REFERENCES Monstro(monstro_ID),
    bau_id INT FOREIGN KEY
    REFERENCES Bau(bau_id)
);

CREATE TABLE Personagem (
    personagem_ID INT PRIMARY KEY,
    nome VARCHAR (50),
    vidaMax INT,
    vidaAtual INT,
    forca INT,
    agilidade INT,
    nivel INT,
    posicao INT FOREIGN KEY
    REFERENCES Sala(sala_ID)
    --mana INT, é uma ideia boa mas por enquanto acho mais fácil tirar
);
-- por enquanto a questão da experiência não esta adicionada, vamos focar em fazer funcionar






-- CREATE TABLE Andar (
--     andar_ID INT PRIMARY KEY,
--     quantidade_salas INT,
--     andar_salas_ID FOREIGN KEY 
--     REFERENCES Sala(sala_ID) --aqui eu quis dizer que um andar tera várias salas, que seram representadas pelo id
-- );
-- resolvi que é melhor que só tenha a tabela sala mesmo,
-- ai se no primeiro andar tiver 3 salas, a primeira sala do próximo andar será a de id 4


-- CREATE TABLE Chave (
--     chave_ID INT PRIMARY KEY
-- );   
-- deixa esse conceito de bau trancado para depois







-------------- inserts, são coisas que a api vai só puxar do banco
INSERT INTO Arma (arma_ID,nome,dano,descricao) VALUES (1, 'Espada de Madeira', 1.05, 'Uma simples espada de madeira...')
INSERT INTO Arma (arma_ID,nome,dano,descricao) VALUES (2, 'Espada de Prata', 1.09, 'Uma simples espada de Ferro...')
INSERT INTO Arma (arma_ID,nome,dano,descricao) VALUES (3, 'Espada de Ouro', 1.12, 'Uma bela espada de Ouro')
INSERT INTO Arma (arma_ID,nome,dano,descricao) VALUES (4, 'Espada de Rubi', 1.2, 'Uma espada forjada inteiramente do rubi mais brilhante')
INSERT INTO Arma (arma_ID,nome,dano,descricao) VALUES (5, 'Tridente de Netuno', 5, 'O tridente de Netuno, majestoso e imponente, brilha com uma aura celestial. Forjado nos abismos do oceano, suas três pontas cortam as ondas e dominam o reino das profundezas, refletindo o poder supremo do deus dos mares.')
INSERT INTO Arma (arma_ID,nome,dano,descricao) VALUES (6, 'Trovão de Júpiter', 99, 'O raio de Júpiter, forjado no coração dos céus, relampeja com uma fúria celestial. Este dardo de pura energia divina, envolto em chamas e eletricidade, descerra os céus e domina os trovões com um estrondo primordial. Seu brilho é o selo do poder supremo e a marca da soberania do rei dos deuses.')
INSERT INTO Arma (arma_ID,nome,dano,descricao) Values (0, Null,Null,Null)

--esses inserts de monstro serão decididos pelo caderno da marina
INSERT INTO Monstro (monstro_ID,nome,vidaMax,vidaAtual,forca,agilidade) VALUES (1, 'Correx', 100, 100, 100, 100)
INSERT INTO Monstro (monstro_ID,nome,vidaMax,vidaAtual,forca,agilidade) VALUES (0,Null,Null,Null,Null,Null)

INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (1, 'Poção de vida pequena', 10, 0)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (2, 'Poção de vida média', 30, 0)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (3, 'Poção de vida grande', 50, 0)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (4, 'Poção de nivel pequena', 0, 2)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (5, 'Poção de nivel média', 0, 4)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (6, 'Poção de nivel grande', 0, 8)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (7, 'Poção mista', 30, 3)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (8, 'Lágrima de Plutão', 999, 999)
INSERT INTO Pocao (pocao_ID,nome,ganho_vida,ganho_nivel) VALUES (0, Null, Null, Null)

INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (1, 1, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (2, 2, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (3, 3, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (4, 4, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (5, 5, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (6, 6, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (7, 7, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (8, 8, 0)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (9, 0, 1)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (10, 0, 2)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (11, 0, 2)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (12, 0, 3)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (13, 0, 4)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (14, 0, 5)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (15, 0, 6)
INSERT INTO Bau (bau_id,pocao_ID,arma_ID) VALUES (0, null, null)


INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (1, 0, 1)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (2, 0, 2)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (3, 0, 3)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (4, 0, 4)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (5, 0, 5)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (6, 0, 6)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (7, 0, 7)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (8, 0, 8)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (9, 0, 9)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (10, 0, 10)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (11, 0, 11)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (12, 0, 12)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (13, 0, 13)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (14, 0, 14)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (15, 0, 15)
--aqui comçam as salas de monstro (os monstros ainda não foram criados)
INSERT INTO Sala (sala_ID,monstro_ID,bau_id) VALUES (16, 1, 0)