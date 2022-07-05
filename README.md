# Projeto Tinnova
## Projeto Cadastro de veículos

## Desenvolvimento

 Criado uma aplicação back-end baseda em web services usando JSON 

 Desenvolvido uma API JSON RESTful, utilizando os métodos (GET,POST,PUT,PATCH,DELETE).
 
 Foi utilizado a extensão ThunderClient(Vs Code) para requições das rotas.
 
 Realizado teste unitário da API.


## Tecnologias:

  - `Javascript, NodeJS, MySQL, Sequelize, Express, JSON, Mocha, Chai, Sinon, VSCode`

## Clone o repositório
 
  - `git clone git@github.com:michel-oliveira8/Vehicle-Registration-Project-Tinnova.git`.
  
### Entre na pasta do repositório que você acabou de clonar:
 
 - `cd Vehicle-Registration-Project-Tinnova.git`
    
### Instale as dependências

  - `npm install`

### Rodar a aplicação :

#### Para instalar o serviço MySQL na maquina:
- `Linux: sudo apt install mysql-server`
`macOS: brew install mysql`

#### Para verificar status do serviço MySQL na máquina:
- `Linux: sudo systemctl status mysql`
`macOS: brew services list`

#### Para ativar o serviço MySQL:
- `Linux: systemctl start mysql`
`macOS: brew services run mysql`

#### Scripts para fazer na raiz do projeto:

  - `npm run db:reset`(cria o banco, as colunas e popula o mesmo)
  - `npm run dev` rodar servidor ma porta 3001 para realizar endpoits

## Para rodar os testes:

  - `npm test`
  
## API Endopoints

    GET /veiculos
    Retorna todos os veículos
    
    GET /veiculos/find/sale
    Retorna informação de quantos veículos estão como não vendidos na base
    Ex: http://localhost:3001/veiculos/find/sale?q=false
    
    GET /veiculos/find/year
    Retorna informação da distribuição de veículos por decada de fabricação
    Ex: http://localhost:3001/veiculos/find/year?q=2020
    
    GET /veiculos/find/search
    Retorna informação da distrbuição por fabricante
    Ex: http://localhost:3001/veiculos/find/search?q=Volkswagen
    
    GET /veiculo/:id
    Retorna os detalhes do veículo
    
    POST /veiculos
    Adiciona um novo veículos
    
    PUT /veiculos/:id
    Atualiza os dados de um veículo
    
    PATCH /veiculos/:id
    Atualiza apenas alguns dados do veículo(foi realizado a atualização da venda)
    
    DELETE /veiculos/:id
    Apaga o veículo
    
## Referencias:

Mocha: https://mochajs.org/
<br>
Sinon: https://sinonjs.org/releases/latest/
<br>
MySQL: https://dev.mysql.com/doc/
<br>
Sequelize: https://sequelize.org/
<br>
ExpressJs: https://expressjs.com/pt-br/guide/routing.html

