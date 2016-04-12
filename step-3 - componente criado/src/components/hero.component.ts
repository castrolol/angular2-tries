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
