import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { HerosInterceptors } from './interceptors/heros.interceptor';
import { SuperheroModule } from './superheros/superhero.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SuperheroModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HerosInterceptors,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
