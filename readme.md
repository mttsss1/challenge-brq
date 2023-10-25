<h1>Challenge - BRQ</h1>

Configurando máquina
-------------------------
Necessário instalar:
-----------------------

*	Node.js, recomendado usar versão LTS.
*	CMD for Windows: Sistema que traz as funcionalidades bash (Terminal) para o Windows.


Configurando o ambiente de automação de testes Web
------------------------------------------------------------

Para que automação possa ser realizada é necessário instalar alguns recursos, conforme será descrito abaixo:

Windows
--------

<h3>1. Instalando o Console do CMDER</h3>

*	Baixe em: <https://github.com/cmderdev/cmder/releases/download/v1.3.16/cmder.zip> .
*	Descompactar na pasta C:\Cmder.
*	Selecione o cmder.exe e arrastar até barra de ferramentas do Windows para criar um atalho.
*	Executar o cmder.exe.

<h3>2. Instalando o Node js para Windows</h3>

*	Baixe em: <https://nodejs.org/en/>.
*	Executar o arquivo baixado e seguir as instruções clicando em ‘next’.
*	No Console do Cmder, digite o comando node –v, se a instalação estiver correta aparecerá a versão instalada.

<h3>4. Instalando o dependencias</h3>

No console do CMDER ou no terminal da ferramenta de desenvolvimento escolhida, na pasta raiz do projeto digite o comando:
```bash
npm install
```

Executando os testes automatizados
-----------------------------------

*	Para execução de todos os cenários implementados com o navegador Chrome (Default) utilizamos o seguinte código:
````bash
npm run cypress
````