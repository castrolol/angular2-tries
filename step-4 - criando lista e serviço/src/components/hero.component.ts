import {Component, Input} from 'angular2/core';
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
        }
      `  
    ],
    template: `
         <div class='list-group-item'>
            <img src="{{imagem}}" />
            <h3>{{hero?.nome}}</h3>
        </div>
    `
})
export class HeroComponent {
    @Input()
    hero: Hero;
    
    get imagem(): String  {
        if(!this.hero) return "";
        
        if(this.hero.time == "dc"){
            return "imgs/dc-logo.png";
        }else{
            return "imgs/marvel-logo.png";
        }
    } 
    
    
 }
