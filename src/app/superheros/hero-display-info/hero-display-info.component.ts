import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CommonHeroService } from 'src/app/services/common-hero.service';

@Component({
  selector: 'app-hero-display-info',
  templateUrl: './hero-display-info.component.html',
  styleUrls: ['./hero-display-info.component.css']
})
export class HeroDisplayInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private commonserv: CommonHeroService, private router: Router) { }

  herodisplayInfo$!:Observable<any>;
  intelligence:number = 0;
  strength:number = 0;
  speed:number = 0;
  durability:number = 0;
  power:number = 0;
  combat:number = 0;

  ngOnInit(): void {
    
    this.route.params.pipe(
      map((x:any) => x.id)
    ).subscribe((params:number) => {
      if(params !== null){
        this.herodisplayInfo$ = this.commonserv.getherosData(params);

        this.herodisplayInfo$.subscribe(data => {
          this.intelligence = data.powerstats.intelligence;
          this.strength = data.powerstats.strength; 
          this.speed = data.powerstats.speed;
          this.durability = data.powerstats.durability;
          this.power = data.powerstats.power;
          this.combat = data.powerstats.combat;
        })
        
      }
    })

  }

  returnhomeButton(){
    this.router.navigate(['/'])
   }
  

}
