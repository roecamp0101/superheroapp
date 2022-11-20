import { NgModule } from '@angular/core';
import { HeroDisplayInfoComponent } from './hero-display-info/hero-display-info.component';
import { HeroSelectComponent } from './hero-select/hero-select.component';
import { SharedModule } from '../shared/shared/shared.module';
import { SearchFilterPipe } from '../shared/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    HeroDisplayInfoComponent,
    HeroSelectComponent,
    SearchFilterPipe
  ],
  imports: [
    SharedModule,
    Ng2SearchPipeModule
  ],
  exports: [
    SharedModule
  ]
})
export class SuperheroModule { }
