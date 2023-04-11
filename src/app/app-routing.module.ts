import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AccauntComponent } from './components/accaunt/accaunt.component';
import {BasketComponent} from "./components/basket/basket.component";


const routes: Routes = [
  {path:'', redirectTo: 'Home',pathMatch:'full'},
  {path:'Home',component:MainComponent},
  {path:'Shopping-list',component:ShoppingListComponent},
  {path:'Accaunt',component:AccauntComponent},
  {path:'Basket',component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
