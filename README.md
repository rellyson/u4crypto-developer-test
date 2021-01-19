# Teste U4Crypto

### Sobre o teste

- 1.Modele um domínio para o seguinte problema:

  - Modele um sistema para uma empresa de proteção veicular.
  - Nesse sistema existem clientes e terceiros.
    - Os clientes podem criar uma conta inserindo informações básicas de cadastro.
    - Os clientes podem editar alguns dados cadastrados.
    - Os clientes podem criar um evento de acidente, onde será possível informar o veículo envolvido no acidente e o(s) terceiro(s).
    - Os terceiros são cadastrados quando é criado um acidente, se não houver um registro prévio na base de dados.
    - Todos os usuários(clientes e terceiros) precisam ter documentos associados as suas contas.
    - Quando um houve o cadastro de um cliente que já foi envolvido como terceiro em um acidente, é preciso migrar o usuário para cliente sem perder o vínculo criado no acidente.

- 2.Crie uma API RESTful em NodeJS com as seguintes tecnologias:
  - Typescript.
  - HapiJS.
  - TypeORM.
  - PostgresSQL.
  - Jest

### Antes de iniciar o projeto

O projeto depende de um banco de dados postgres. Para iniciar um banco de dados postgres pré configurado usando Docker, roda o seguinte comando:

`docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=I3JHDcmqR1IbN6HHS8iZvydznEGVAeNktS28h2Fw1zc -e POSTGRES_DB=vehicle_protection -d postgres`

### Rodando o projeto no ambiente de desenvolvimento

Para rodar o projeto usando o ambiente de desenvolvimento, use o comando `yarn run develop` ou `npm run develop`

### Rodando o projeto no ambiente de produção

O projeto está pronto para produção. Para rodar como produção, use o comando `yarn start` ou `npm start`

