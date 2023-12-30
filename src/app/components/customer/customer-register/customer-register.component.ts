import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit{
  customer:Customer=new Customer("",0,"",0,"",);// initially empty values
  message: any;
// later get the values from html
  ngOnInit(): void {
  }
  constructor(private service:CustomerService){}
    public registerNow(){
      console.log("registerNoW()")
   let resp=this.service.registerNow(this.customer);
   resp.subscribe((data)=>this.message=data);

}
}


