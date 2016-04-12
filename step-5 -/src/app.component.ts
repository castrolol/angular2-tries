import {Component} from 'angular2/core'; 
import {HeroesListComponent} from './components/hero-list.component';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
    directives: [HeroesListComponent],
    providers: [HTTP_PROVIDERS],
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
