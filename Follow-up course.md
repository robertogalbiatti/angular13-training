# Acompanhamento curso

1. `ng new my-first-app` (colocar não e CSS)

2. Depois ir para a pasta com o comando cd e dar `um ng server` para criar um servidor de desenvolvimento para testarmos no navegador.
   > Para o começo do desenvolvimento e aprendizado junto ao instrutor, deve-se baixar o app.component.html e trocar pelo atual

**_Como funciona a build do angular? Quando damos start num projeto com ng serve?_**

> (ver vídeo 16)...

## Criando componente

Criar uma pasta e dentro dela criar os arquivos na mão, ou dentro da pasta vc da o comando `ng g c <nome do componente>`. Se for criar sem o arquivo spec seria: `ng g c <component> --skip-tests=true`

> OBS: No caso seria `ng generate class <nome>`.

## Entendendo os arquivos/

Primeiramente o arquivo _main.ts_ vem primeiro e dentro dele achamos um `bootstrapModule(AppModule)`, então, se abrirmos o _app.module.ts_ encotramos o `AppComponent`. Assim, o Angular analisa agora o _app.component.ts_, lê o `app-root` (selector)\* e assim dentro do _index.html_ lá está o `app-root`, assim ele deve inserir o app componente, e então o app component possui um html, então o angular lê esse html.

> \*Com esta informação, Angular entende que “essa linha” deva ser modificado pro Componente que utiliza o `app-root`, assim utilizando o template _app.component.html_.

![Alt text](/screenshots/app-root.png?raw=true)

![Alt text](/screenshots/AppComponent.png?raw=true)

![Alt text](/screenshots/AppComponentfile.png?raw=true)

![Alt text](/screenshots/indexHtml.png?raw=true)

![Alt text](/screenshots/AppComponentHtml.png?raw=true)
Isso é o que irá mostrar em tela...

> Basicamente o angular é um JS framework que muda o DOM em tempo real (runtime)

_App.module.ts_: angular usa os componentes para criar as páginas, e módulos para “embrulhar” coisas diferentes, portanto se criamos uma pasta server e criamos o _server.component.ts_ e _html_, precisamos coloca-lo no `@NgModule` como declarations, para poder ser lido pelo angular.
Quando vemos bootstrap nas declarações: significa, qual componente deve ser reconhecido dentro do _index.html_.

## Databiding

Comunicação entre nosso business code, ts code e o template (html que o usuário vê).
![Alt text](/screenshots/Databiding.png?raw=true)

## String Interpolation

Deve-se usar quando queremos mostrar algo no _template_, algo como texto... e de outra forma usar **_Property Biding_**, como mostrar um componente, ou querer mudar algo, seja um elemento HTML ou whatever...

> Lembrando que neste caso: `<button class="btn btn-primary" [disabled]="!allowNewServer">Add Server</button>` A parte `[disabled]="!allowNewServer">` na verdade é Angular, e não HTML...

## Directives

são instruções no DOM (componentes acabam sendo tb “tipo” instruções...pq?
Estamos falando para o Angular adicionar o conteúdo do nosso **_Template_** (assim como a lógica do _arquivo ts_, de forma que estamos indicando no `selector`).
Mas os componentes são **_directives_** com um **_template_**, por assim dizer.
Assim como existe os **_directives_** sem **_template_**:

![Alt text](/screenshots/directives.png?raw=true)

Usos de directives: **_ngIf, ngElse_** (estruturais) e também tem de **_atribute_** que funcionam onde modificam apenas onde foram colocadas, como elementos HTML.
Para **_ngClass_**, ele só acontecerá se uma condição acontecer, portanto trabalha com boolean, e estamos falando de classe CSS.

> **OBS: Para as structural directives sempre utilizamos o \* antes, sempre que modifica o DOM!!!**

## Novo course project

Nesta parte do curso, estamos criando um app de acordo com o modelo abaixo:
![Alt text](/screenshots/planningApp.png?raw=true)

Para criar de forma automática um Component e sem o arquivo spec(Testes), dar o comando:
`ng g c recipes --skip-tests true`

Para criar algo dentro de um diretório de um component:
`ng g c recipes/recipe-detail --skip-tests true`

## Debug

A função debug pode ser acessada diretamente na aba desenvolvedor em **"Sources"** e se pularmos pro arquivo **_main.bundle.js_** iremos encontrar nossos métodos e afins.
Assim que colocarmos um ponto de parada ele vai direto para um arquivo TypeScript, mas como?!
Isso tudo acontece pq o JS suporta **source maps**.
**_Source maps_**: CLI adiciona ao nosso bundle o arquivo TypeScript para o navegador traduzir JS para TS. É assim que vemos nosso código em TS.

### Como encontrar nossos arquivos?

R.: em Sources, ir em webpack
![Alt text](/screenshots/webpackfiles.png?raw=true)

## Property and Event Bidinders

Apenas uma imagem pra exemplificar o que foi visto

![Alt text](/screenshots/propertyEvenBiding.png?raw=true)
