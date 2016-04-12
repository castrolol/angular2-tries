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

