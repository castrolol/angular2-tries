import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Hero} from '../models/hero';


@Injectable()
export class HeroService {
    
    constructor(private _http: Http){}
     
    getHeroes(){ 
        return this._http.get("/heroes.json").map( r => <Hero[]>r.json(), this.handleError);
        
    }
    
    handleError(){
        console.log(arguments);
    }
    
}