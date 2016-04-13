import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Hero} from '../models/hero';

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
            clear: both;
            cursor: pointer;
        }
        
         div:hover {
             background: #eee;
         }
      `  
    ],
    template: `
         <div class='list-group-item'  >
            <img src="{{imagem}}" (click)="select()" />
            <h3  (click)="select()">{{hero?.nome}}</h3>
            <button class="btn pull-right" (click)="removed.emit(hero)" >
                <i class="glyphicon glyphicon-trash"></i> 
            </button>
        </div>
    `
})
export class HeroComponent {
    @Input()
    hero: Hero;
    
    @Output()
    selected = new EventEmitter<Hero>();
    
    @Output()
    removed = new EventEmitter<Hero>();
    
    
    select(){
        this.selected.emit(this.hero);
    }
    
    get imagem(): String  {
        if(!this.hero) return "";
        
        if(this.hero.time == "dc"){
            return "imgs/dc-logo.png";
        }else{
            return "imgs/marvel-logo.png";
        }
    } 
    
    
 }
