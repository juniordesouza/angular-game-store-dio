import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameCardLabelComponent } from './components/game-card/game-card-label/game-card-label.component';
import { GameCardPriceComponent } from './components/game-card/game-card-price/game-card-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameCardComponent,
    NavbarComponent,
    GameCardLabelComponent,
    GameCardPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
