import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class SharedModule { }
