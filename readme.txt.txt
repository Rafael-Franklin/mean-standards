# Instruções para instalar e executar a aplicação #

A gestão das normas foi desenvolvida em MEAN (Mongo / Express / Angular e Node)


1 - baixar os fontes no Git;

FRONT-END

2 - No diretório angular-mean-sigo executar via prompt o comando npm install;

3 - após concluida a instalação das dependencias executar no mesmo diretório o comando ng s;

4 - a aplicação com front-end estará disponivel em http://localhost:4200/. Usuário adm e senha igual 123;

BACK-END

5 - Inicializar o back-end no diretório node-backend via prompt através do comando nodemon. (Database utilizado Mongo)

6 - A API estara disponível em localhost:8000/api. Os outros métodos são: /api/add-standard, /api/read-standard, /api/update-standard e /api/delete-standard; 

MENSAGERIA

7 - A parte de mensageria exige um container executando uma imagem do Rabbitmq. Os dados para login são user e psw igual guest;

8 - Para iniciar o WORKER executar o comando node worker.js no diretório angular-mean-sigo. 

9 - As notificações a cada post são informadas na caixa postal angulartestesigomeanangular@gmail.com;