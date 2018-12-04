import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from '../app/component/header/header.component';
import { ItemComponent } from './pages/item/item.component';
import { AutoComponent } from './pages/auto/auto.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { ElectronicComponent } from './pages/electroncis/electronic.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ItemComponent,
    AutoComponent,
    ClothingComponent,
    ElectronicComponent
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
