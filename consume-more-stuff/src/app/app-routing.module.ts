import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { HeaderComponent } from '../app/component/header/header.component';
import { ItemComponent } from './pages/item/item.component';
import { AutoComponent } from './pages/auto/auto.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ElectronicComponent } from './pages/electroncis/electronic.component';
import { GeneralComponent } from './pages/general/general.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'item', component: ItemComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'auto', component: AutoComponent},
  { path: 'clothing', component: ClothingComponent},
  { path: 'electronics', component: ElectronicComponent},
  { path: 'general', component: GeneralComponent},

  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
