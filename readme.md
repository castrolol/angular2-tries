## Passo a Passo

 - Clonando o repositorio `git clone  https://github.com/angular/quickstart`
 > Verifique se o proxy está configurado
 
 
 - Instalando os pacotes `npm` com o comando `npm install`

 
 - Vamos configurar o `tsconfig.json` para buscar da pasta `src` e compilar na pasta `app`
     1. Abra o arquivo e insira as chaves/valores:
     ```json
        ...
            "outDir" : "app",
            "rootDir": "src"
        ...
     ```
     > Insira dentro de `"compilerOptions": {`
     
     2. Renomeia a pasta `app` para `src`

 
 - Vamos criar uma pasta para nossos ***Componentes*** dentro de `src`
    1. Criaremos um arquivo `hero.component.ts`
    
    ```ts
    
         import {Component} from 'angular2/core'; 
         
         @Component({
            selector: "hero",
            styles: [
            `
                h3 {
                    margin: 0 0 0 0;
                    display: inline-block;
                }
                
                img {
                    width: 48px;
                    height: 48px;
                    display: inline-block;
                    margin-top: -8px;
                } 
                
                div { 
                    
                    text-align: left;
                    padding: 16px 8px 8px 8px;
                    margin: 0px;
                }
            `  
            ],
            template: `
                <div class='list-group-item'>
                    <img src="imgs/dc-logo.png" />
                    <h3>My Hero!</h3>
                </div>
            `
        })
        export class HeroComponent { }
    ```
 
   2. Vamos mudar nosso `AppComponent`  para :
   
   ```ts
        import {Component} from 'angular2/core';
        import {HeroComponent} from './components/hero.component';
        
        @Component({
            directives: [HeroComponent],
            selector: 'my-app',
            styles: [
            `
                div.container {
                    text-align: center;
                    padding: 32px;
                }
            `  
            ],
            template: 
            `
                <div class="container">
                    <hero></hero>
                    <hero></hero>
                    <hero></hero>
                    <hero></hero>
                    <hero></hero>
                </div>
            `
        })
        
        export class AppComponent { }

   ```
 
 - Criar um model para o Hero Componente
    1. Criar pasta chamada ***models*** em `src`
    2. Criar arquivo chamado `hero.ts`

        ```js
            //hero.ts
            export class Hero {
                id: number;
                nome: string;
                time: string;
            }
        ```
        
 - Criar property de @Input para HeroComponent
 
 - Criar serviço de dados de Hero
    1. Criar pasta chamada ***services*** em `src`
    2. criar arquivo chamado `hero.service.ts`
    
    ```ts
            import {Injectable} from 'angular2/core';
            import {Hero} from '../models/hero';
            
            @Injectable()
            export class HeroService {

               getHeroes(){

                    var heroes = [
                        { id: 1,  nome: "Batman", time: "dc" },
                        { id: 2,  nome: "Capitão America", time: "marvel" },
                        { id: 3,  nome: "Superman", time: "dc" },
                        { id: 4,  nome: "Iron Man", time: "marvel" },
                        { id: 5,  nome: "QuickSilver", time: "marvel" },
                        { id: 6,  nome: "Wonder Woman", time: "dc" },
                        { id: 7,  nome: "Flash", time: "dc" }
                    ];

                    return Promise.resolve(heroes);

                }

        }
    ```
    
- Criar Componente de Lista de Heroes

    1. Crie um arquivo `heroes-list.component.ts` na pasta ***components***
    
    ```ts
        
        import {Component, Input, OnInit} from 'angular2/core';
        import {Hero} from '../models/hero';
        import {HeroComponent} from '../components/hero.component';
        import {HeroService} from '../services/hero.service';

        @Component({
            providers: [HeroService],
            directives: [HeroComponent],
            selector: 'heroes-list',
            template: `
                <div class='row'>
                    <div class='col-sm-4'  >
                        <hero *ngFor="#hero of heroes" [hero]="hero" ></hero>
                    </div>
                </div>
            `
        })
        export class HeroesListComponent implements OnInit  {
                
                heroes: Hero[];
                
                constructor(private _heroService: HeroService){
                    (<any>window).a = this;
                }
                
                ngOnInit(){
                    this._heroService
                        .getHeroes()
                        .then(res => this.heroes = (<Hero[]>res))
                        .catch( this.handleError )
                }
                
                handleError(){
                    console.log(arguments);
                }
            
            }
        
    ```
    
    2. E vamos mudar nosso `AppComponent` para 
    ```ts
        import {Component} from 'angular2/core'; 
        import {HeroesListComponent} from './components/hero-list.component';

        @Component({
            directives: [HeroesListComponent],
            selector: 'my-app',
            styles: [
            `
                div.container {
                    text-align: center;
                    padding: 32px;
                }
            `  
            ],
            template: 
            `
                <div class="container">
                    <heroes-list></heroes-list>
                </div>
            `
        })
        export class AppComponent { }
    ```
    
    
 - Criaremos agora nosso serviço buscando do HTTP
    1. Primeiro vamos criar o `heroes.json` na raiz do projeto
    ```json
        [
            { "id": 1,  "nome": "Batman", "time": "dc" },
            { "id": 2,  "nome": "Capitão America", "time": "marvel" },
            { "id": 3,  "nome": "Superman", "time": "dc" },
            { "id": 4,  "nome": "Iron Man", "time": "marvel" },
            { "id": 5,  "nome": "QuickSilver", "time": "marvel" },
            { "id": 6,  "nome": "Wonder Woman", "time": "dc" },
            { "id": 7,  "nome": "Flash", "time": "dc" }
        ]
    ```
    2. Vamos mudar nosso heroes service
    ```ts
        
    ```