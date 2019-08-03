## Tecnologias utilizadas:

1. **Vue** 
2. **node**
3. **Firebase**

## Vue

Segundo Descomplica  "Vue é uma framework progressivo JavaScript que se concentra na criação de componentes reutilizáveis . Como ele só funciona na “camada de visualização”, pode ser integrado facilmente a outros projetos e bibliotecas. O Vue.js oferece muitas funcionalidades para a camada de visualização e pode ser usado para criar  Single Page Applications, aquele tipo de aplicação que nunca recarrega durante seu uso. A seguir, você pode encontrar uma lista de recursos:

- Interfaces Reativas

- Renderização Declarativa

- Ligação de dados

- Diretivas

- Lógica de modelo

- Componentes

- Manipulação de eventos

- Propriedades computadas

- Transições CSS e animações

- Filtros"

  

#### Toda  a construção de interfaces de usuário foi desenvolvida em Vue  essas interfaces foram: 

Login - Interface para fazer a autenticação com o Firebase.

CreateAcount - Interface para criar conta de login do Firebase.

Home - Interface para Mostrar o saldo atual e levar para as outras interfaces.

Depositar  - Interface onde o usuário insere um valor e esse valor é adicionado a sua conta.

Pagar - Interface onde o usuário insere um valor e esse valor é retirado da sua conta.

Transferir -  Interface onde o usuário insere um valor e um e-mail do destinatário esse valor é retirado da sua conta e enviado para o destinatário. 

## Node

Segundo Guilherme Santos " Node.js é uma plataforma para construir aplicações web escaláveis de alta performance usando JavaScript

Ele foi construído em cima da engine [V8](https://developers.google.com/v8/) que interpreta JavaScript, criado pela Google e usado em seu navegador, o Chrome. Isso quer dizer que você utilizará a linguagem pelo lado do servidor também, e não só pelo browser, como normalmente ocorre.

Além disso, ele usa uma arquitetura voltada a eventos, o que se integra muito bem com JavaScript (callbacks!). Usando um loop de eventos, o Node interpreta, em uma única thread, as requisições de forma assíncrona em vez de sequenciais, e não permitindo bloqueios. Isso o torna incrivelmente rápido, perfeito para lidar com um número muito alto de requisições.

Apesar da ideia original ser essa, Node não é só um servidor. Sim, você pode montar servidores http e https, assim como servidores de DNS, TCP, Media Server e etc. Mas agora também é possível criar aplicações desktop com o Node-WebKit e até mesmo ambientes de desenvolvimento para front-end."

#### No todas funçoes foram feitas em nodes como:

Todas as Views vistas anteriormente utilizavam node para exercer funções e métodos. Essas funções eram diretamente voltadas para a comunicação entre as views e o banco de dados Firebase.

## Firebase

Daniel Viana diz "O Firebase é uma plataforma do Google que contém várias ferramentas e uma excelente infraestrutura para ajudar desenvolvedores web e mobile a criar aplicações de alta qualidade e performance.

Com a missão de poupar tempo e fornecer um aplicativo de alta qualidade, esta plataforma contém vários recursos para os desenvolvedores, são eles:

- **Authentication:** Este recurso de autenticação é fundamental para as aplicações onde é necessário saber a identidade do usuário e manter o controle do acesso ao app. Também, com o **Firebase Authentication**, é possível utilizar provedores de identidades federais para autenticação como as contas do Google, Facebook, Twitter e GitHub.
- **Realtime Database:** O Firebase também disponibiliza um banco de dados NoSQL *(Firebase Realtime Databse)* hospedado em nuvem, onde os dados são armazenados como JSON e sincronizados em tempo real com todos os clientes conectados.
- **Storage:** Útil para armazenar arquivos como imagens, vídeos e áudio, além de outros conteúdos gerados por usuários.
- **Hosting:** Este serviço é oferecido para hospedar HTML, CSS e JavaScript para seu site, além de outros ativos fornecidos pelo desenvolvedor, como gráficos, fontes e ícones. O **Firebase Hosting** possui certificado SSL fornecido automaticamente, é ideal para aplicativos web e web para dispositivos móveis."

#### O projeto utilizou os seguintes recursos: 

**Authentication**  Ultilizado para a criação de contas e login.

**Realtime Database** No projeto foi ultilizada para armazenar os valores do Saldo

**Hosting** Usado para hospedar (Deploy) do site disponivel em: https://academy-8c3dc.firebaseapp.com/



## Etapas para criação:

- [x] Desenvolver uma base em html e CSS

- [x] Passar o Projeto para VUE

- [x] Desenvolver o Login e Cadastro baseado no Firebase Authentication

- [x] Desenvolver a Home Baseado no modelo proposto.

- [x] Desenvolver o Saldo, Depositar e Transferir com suas funções

- [x] Integrar 100% com o banco de Dados Realtime Database do Firebase

  

  ## Dificuldades:

- Estilizar corretamente Usando CSS
- Trabalhar com json
- Trabalhar com Data
- Trabalhar com funções do VUE dentro do HTML

## Como posso usar a aplicação?

###### Pelo site : https://academy-8c3dc.firebaseapp.com/

###### No Computador :

1. git clone https://github.com/pedrodalben/academy2019-cryptobank

2. Criar uma conta no Firebase e criar um novo projeto (firebase.google.com)

3. Adicionar um arquivo .env na raiz do projeto (no projeto a um .env.example com todas informações que deverão ser preenchidas, essas informações são dadas ao criar o projeto no firebase)

4. Instalar as dependências : 

   Yarn install 

   yarn global add serve

   5. Rodar:

      - yarn serve

      

   ## Como foi feito o deploy?

   1. npm install -g firebase-tools
   2. firebase login
   3. node run build
   4. firebase init
   5. firebase deploy



##### Referencias :

- https://www.treinaweb.com.br/blog/firebase-descubra-no-que-esta-plataforma-pode-te-ajudar/

- https://firebase.google.com/docs/

- https://medium.com/thdesenvolvedores/node-js-o-que-é-por-que-usar-e-primeiros-passos-1118f771b889

- https://descompila.com.br/o-que-e-vuejs/

- https://vuejs.org

- https://nodejs.org/en/docs/

  