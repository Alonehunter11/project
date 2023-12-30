import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { HomeComponent } from './components/home/home.component';

import { SearchDeleteComponent } from './components/vehicle/search-delete/search-delete.component';
import { RegisterComponent } from './components/vehicle/register/register.component';
import { UpdateComponent } from './components/vehicle/update/update.component';
import { CustomerService } from './service/customer.service';
import { VehicleService } from './service/vehicle.service';
import { CustomerRegisterComponent } from './components/customer/customer-register/customer-register.component';
import { CustomerSearchDeleteComponent } from './components/customer/customer-search-delete/customer-search-delete.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    VehicleComponent,
    HomeComponent,
    CustomerRegisterComponent,
    CustomerSearchDeleteComponent,
    CustomerUpdateComponent,
    RegisterComponent,
    SearchDeleteComponent,
    VehicleComponent,
    SearchDeleteComponent,
    RegisterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService,VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
