import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/entity/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit{
  customer:Customer=new Customer("",0,"",0,"",); //initially empty values
  //later get the values from html page
  
customerId:any;
message:any;
constructor(private customerService:CustomerService,private router:ActivatedRoute,private route:Router){}
ngOnInit(): void {
this.customerId=this.router.snapshot.params['customerId'];
let resp= this.customerService.getUserById(this.customerId).subscribe(data=>{
this.customer=data;
},error=>console.log(error));

}

updateCustomer(){
this.customerService.updateCustomer(this.customerId,this.customer).subscribe(data=>{
//navigate to the search-delete component page
this.route.navigate(['/search']);
});


}
}
