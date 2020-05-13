# fake_instagram

##### Configurar o banco de dados

* Instalar as bibliotecas:
  * $ npm install sequelize mysql2
  * $ npm install sequelize-cli -D

* Criar a database:
  * $ npx sequelize db:create 

* Criar uma migration:
  * Criar nova entidade:
    * $ npx sequelize migration:create --name=create-NomeDaEntidade
  *Criar nova coluna:
    * $ npx sequelize migration:create --name=add-column-NomeDaColuna

* Implementar as migrations:
  * $ npx sequelize db:migrate