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
                <button (click)="addHero()" >a </button>
                <hero *ngFor="#hero of heroes" [hero]="hero" ></hero>
            </div>
        </div>
    `
})
export class HeroesListComponent implements OnInit  {
    
    heroes: Hero[];
    
    constructor(private _heroService: HeroService){ }
    
    addHero(){
        this.heroes.push(new Hero());
    }
    
    ngOnInit(){ 
        this._heroService
            .getHeroes()
            .subscribe(heroes =>{   
                this.heroes = heroes 
            });
    }
    
    handleError(){
        console.log(arguments);
    }
    
}

