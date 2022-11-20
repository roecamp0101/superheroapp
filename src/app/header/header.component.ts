import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperheroModel } from '../models/super-hero.model';
import { CommonHeroService } from '../services/common-hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedSolutionId:any = '';

  constructor(private commonhero: CommonHeroService) { }

  ngOnInit(): void {

  }


  onSelectSolution() {
    // this.commonhero.onSelectSolution(this.selectedSolutionId)
    this.commonhero.searchSubject.next(this.selectedSolutionId); // emit the value to the shared service
  }
  

}
