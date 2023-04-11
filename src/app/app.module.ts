import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AccauntComponent } from './components/accaunt/accaunt.component';
import { SliderComponent } from './components/Main/slider/slider.component';
import { BasketComponent } from './components/basket/basket.component';
import {HttpClientModule} from "@angular/common/http";
import { ShoppingItemComponent } from './components/shopping-list/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShoppingListComponent,
    AccauntComponent,
    SliderComponent,
    BasketComponent,
    ShoppingItemComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
