import {Component} from 'angular2/core';
import {HeroComponent} from './components/hero.component';
 

@Component({
    directives: [HeroComponent],
    selector: 'my-app',
    styles: [
      `
        div.container {
            text-align: center;
            padding: 8px 0;
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
