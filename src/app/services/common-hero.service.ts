import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, filter, map, mergeMap, Observable, take, tap } from 'rxjs';
import { SuperheroModel } from '../models/super-hero.model';

@Injectable({
  providedIn: 'root'
})
export class CommonHeroService {

  constructor(private http: HttpClient) { }

  searchSubject = new BehaviorSubject<String>(''); 
  herosArray: SuperheroModel[] = [];
  somethings:any;


  heroData$ = this.http.get<{ [id: string]: SuperheroModel }>('all.json')
  .pipe(
    map((response:any) => {return response})
  )

  getherosData(id:number) {
    return this.http.get(`/id/${id}.json`)
  }


  onSelectSolution(herostext:string) {
    this.searchSubject.next(herostext); // emit the value to the shared service
  }


}