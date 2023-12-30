import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/entity/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  vehicle:Vehicle=new Vehicle("","","",0,"","",);// initially empty values
  message: any;

// later get the values from html
  ngOnInit(): void {

    
  }
  constructor(private service:VehicleService){}
    public registerNow(){
      console.log("registerNoW()" , this.vehicle)
   let resp=this.service.registerNow(this.vehicle);
   resp.subscribe((data)=>this.message=data);

}
}

