import {Component, Input, Output,EventEmitter, OnInit} from 'angular2/core';
import {Hero} from '../models/hero';
import {HeroComponent} from '../components/hero.component';
import {HeroService} from '../services/hero.service';

@Component({
    providers: [HeroService],
    directives: [HeroComponent],
    selector: 'heroes-list',
    styles: [
          
    ],
    template: `
         
            <div class='col-sm-4'  > 
                <div>
                    <button class="btn" (click)="selectHero()" >
                        <i class="glyphicon glyphicon-plus"></i> New Hero!
                    </button>
                </div>
                <hero *ngFor="#hero of heroes" [hero]="hero" (selected)="selectHero($event)" (removed)="removeHero($event)" ></hero>
            </div>
        
    `
})
export class HeroesListComponent implements OnInit  {
    
    heroes: Hero[];
    @Output()
    selectedHero = new EventEmitter <Hero>();
    
    constructor(private _heroService: HeroService){ }
    
   
    selectHero(hero){
        this.selectedHero.emit(hero || new Hero());
    }
    
    removeHero(hero){
          var edited = this.heroes.filter( h => h.id == hero.id )[0]; 
          var indexOf = this.heroes.indexOf(edited);
          this.heroes.splice(indexOf, 1);
    }
    
    add(hero){
        
        if(hero.id){
            var edited = this.heroes.filter( h => h.id == hero.id )[0];      
            edited.nome = hero.nome;
            edited.time = hero.time; 
        }else{
            hero.id = Hero.newId();
            this.heroes.push(hero);
            
        }
        
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

