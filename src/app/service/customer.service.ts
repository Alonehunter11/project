import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/internal/Observable';


import { Customer } from '../entity/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  findUserById(customerId: number) {
    console.log("findUserById")
    return this.http.get("http://localhost:8889/customer/"+customerId)
  }
  deleteCustomer(customerId: number) {
   // if(!confirm("Are you sure you want to delete?")) return;
 
    console.log("deleteCustomer")
    return this.http.delete("http://localhost:8889/customer/"+customerId)
  }
  getCustomer() {
    console.log("getCustomer");
    return this.http.get("http://localhost:8889/customers")
  }

  constructor(private http:HttpClient) { }
  public registerNow(customer: Customer){
   console.log("registerNow");
   return this.http.post("http://localhost:8889/customer",customer,{responseType:'text' as 'json'}  )
 
 }
 updateCustomer(customerId: number, customer: Customer) {
  console.log("updateCustomer");
  return this.http.put("http://localhost:8889/update/"+customerId,customer);
}

getUserById(customerId:number):Observable<Customer> {
  console.log("getUserById");
  return this.http.get<Customer>("http://localhost:8889/customer/"+customerId);
}

}



