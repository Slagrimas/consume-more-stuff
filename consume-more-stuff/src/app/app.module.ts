import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { AutoComponent } from './pages/auto/auto.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ElectronicComponent } from './pages/electronics/electronic.component';
import { GeneralComponent } from './pages/general/general.component';
import { ServiceComponent } from './pages/services-cat/service.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AllItemComponent } from './pages/allItems/allitems.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ItemComponent,
    AutoComponent,
    ClothingComponent,
    ElectronicComponent,
    GeneralComponent,
    ServiceComponent,
    DashboardComponent,
    AllItemComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
