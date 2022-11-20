import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
import { SuperheroModel } from '../../models/super-hero.model';
import { CommonHeroService } from '../../services/common-hero.service';

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.css']
})
export class HeroSelectComponent implements OnInit, OnDestroy {

  constructor(private commonhero: CommonHeroService, private route: Router) { }

  herosData$:Observable<any> = this.commonhero.heroData$;
  herosearchterm: any = '';
  loginSubscription!: Subscription;
  ngOnInit(): void {

 
  this.loginSubscription = this.commonhero.searchSubject
   .subscribe(data => {
     this.herosearchterm = data;
     console.log(this.herosearchterm)
   })
  }

  getheroId(heroid:number, heronames:string){
     this.route.navigate(['herodetails', heroid, heronames])
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

}
