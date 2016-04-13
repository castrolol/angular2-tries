import {Component} from 'angular2/core'; 
import {HeroesListComponent} from './components/hero-list.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HTTP_PROVIDERS} from 'angular2/http';


@Component({
    directives: [HeroesListComponent, HeroDetailComponent],
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
            <heroes-list #list (selectedHero)="detail.setHero($event)" ></heroes-list>
            <hero-detail #detail (saved)="list.add($event)"></hero-detail>
        </div>
    `
})
export class AppComponent { }
