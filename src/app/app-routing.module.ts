import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDisplayInfoComponent } from './superheros/hero-display-info/hero-display-info.component';
import { HeroSelectComponent } from './superheros/hero-select/hero-select.component';

const routes: Routes = [
  {path:'', component:HeroSelectComponent},
  {path:'herodetails/:id/:name', component: HeroDisplayInfoComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
