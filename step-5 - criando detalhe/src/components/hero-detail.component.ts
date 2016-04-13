import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Hero} from '../models/hero';

@Component({
    selector: "hero-detail",
    styles: [
      `
        img {
            width: 48px;
            height: 48px;
        }
        
       
        
        .base {
                margin-top: 42px;
        }
        
        .panel {
            text-align: left; 
        }
        
        .panel-body {
            padding: 32px;
        }
        
        h2 {
            margin-top: 0;
            margin-bottom: 8px;
            display: inline-block;
        }
        
      `  
    ],
    template: `
        <div class="base col-sm-8 pull-right" *ngIf="hero != null">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <img src="{{imagem}}"  /> 
                    <h2>
                        {{hero?.nome}}
                    </h2>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <label>
                                Nome:
                                <input type="text" class="form-control" [(ngModel)]="hero.nome" />
                        </label>
                    </div>
                    
                    <div class="row">
                        <label>
                            Team: 
                            <select [(ngModel)]="hero.time"  class="form-control">
                                <option *ngFor="#time of times" [value]="time.value">{{time.text}}</option>
                            </select>
                        </label>
                   </div>
                   
                   <div class="" >
                        <button class="btn pull-right" (click)="salvar()">
                            <i class="glyphicon glyphicon-floppy-disk"></i>
                            Save... The World!
                        </button>
                   </div>
                   
                </div>
            </div>
        </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
    
    @Output()
    saved = new EventEmitter<Hero>();
    
    times: any[];
    
    constructor(){
        
        this.hero = null;
        
        this.times = [
          { value: "marvel", text: "Marvel Comics" },  
          { value: "dc", text: "DC Comics" },  
        ];
        
    }
    
    setHero(hero){
        this.hero = new Hero(hero);
    }
    
    salvar(){
        var hero = this.hero;
        this.hero = null;
        this.saved.emit(hero);
    }
    
    get imagem(): String  {
        if(!this.hero) return null;
        
        if(this.hero.time == "dc"){
            return "imgs/dc-logo.png";
        }else if(this.hero.time == "marvel"){
            return "imgs/marvel-logo.png";
        }else{
            return "";
        }
    } 
    
    
 }
