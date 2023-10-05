import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountrydetailsService } from './countrydetails.service';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
    // StoreModule.forRoot({}, {})
  ],
  providers: [CountrydetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
