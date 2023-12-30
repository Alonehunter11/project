import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/entity/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  vehicle:Vehicle=new Vehicle("","","",0,"","",); //initially empty values
  //later get the values from html page
  
insuranceId:any;
message:any;
constructor(private vehicleservice:VehicleService,private router:ActivatedRoute,private route:Router){}
ngOnInit(): void {
this.insuranceId=this.router.snapshot.params['insuranceId'];
let resp= this.vehicleservice.getVehicleById(this.insuranceId).subscribe(data=>{
this.vehicle=data;
console.log(this.vehicle);
},error=>console.log(error));

}

updateVehicle(){
this.vehicleservice.updateVehicle(this.insuranceId,this.vehicle).subscribe(data=>{
//navigate to the search-delete component page
this.route.navigate(['/search']);
});


}
}
