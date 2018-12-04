import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { HeaderComponent } from '../app/component/header/header.component';
import { ItemComponent } from './pages/item/item.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'item', component: ItemComponent},
  { path: 'header', component: HeaderComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
