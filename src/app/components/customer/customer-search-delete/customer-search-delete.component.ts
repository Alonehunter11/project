import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-search-delete',
  templateUrl: './customer-search-delete.component.html',
  styleUrls: ['./customer-search-delete.component.css']
})
export class CustomerSearchDeleteComponent implements OnInit{
  customers:any;
  customerId:any;
  constructor(private service:CustomerService, private router:Router){}
  ngOnInit(){
    let resp=this.service.getCustomer();
    resp.subscribe((data)=>this.customers=data);
  
  }
  public deleteCustomer(customerId:number){
    if(!confirm("Are you sure you want to delete?")) return;
  let resp=this.service.deleteCustomer(customerId);
  resp.subscribe((data)=>this.customers=data);

    let resp1=this.service.deleteCustomer(customerId);
    resp.subscribe((data)=>this.customers=data);
    }
    public findUserById(customerId:number){
      console.log("findUserById")
      let resp=this.service.findUserById(this.customerId);
      resp.subscribe((data)=>this.customers=data);
    }
  
    public updateCustomer(customerId:number){
      this.router.navigate(['updateCustomer',customerId])
    }
    
}


