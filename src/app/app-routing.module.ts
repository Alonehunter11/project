import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegisterComponent } from './components/customer/customer-register/customer-register.component';
import { CustomerSearchDeleteComponent } from './components/customer/customer-search-delete/customer-search-delete.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/vehicle/register/register.component';
import { SearchDeleteComponent } from './components/vehicle/search-delete/search-delete.component';
import { UpdateComponent } from './components/vehicle/update/update.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"register",component:CustomerRegisterComponent},

{path:"search",component:CustomerSearchDeleteComponent},
{path:"updateCustomer/:customerId",component:CustomerUpdateComponent},

{path:"vehicle-register",component:RegisterComponent},

{path:"vehicle-search",component:SearchDeleteComponent},
{path:"updateVehicle/:insuranceId",component:UpdateComponent}
]


;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
