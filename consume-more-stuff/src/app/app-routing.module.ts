import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { ItemComponent } from './pages/item/item.component'; 
import { AutoComponent } from './pages/auto/auto.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ElectronicComponent } from './pages/electronics/electronic.component';
import { GeneralComponent } from './pages/general/general.component';
import { ServiceComponent } from './pages/services-cat/service.component';
import { AllItemComponent } from './pages/allItems/allitems.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'items', component: AllItemComponent},
  { path: 'item/:id', component: ItemComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'auto', component: AutoComponent},
  { path: 'clothing', component: ClothingComponent},
  { path: 'electronics', component: ElectronicComponent},
  { path: 'general', component: GeneralComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'register', component: RegisterComponent},

  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
