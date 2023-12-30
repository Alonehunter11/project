import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  vehicles:any;
  insuranceId:any;
  constructor(private service:VehicleService, private router:Router){}
  ngOnInit(){
    let resp=this.service.getvehicle();
    resp.subscribe((data)=>this.vehicles=data);
  
  }
  public deleteVehicle(insuranceId:number){
    if(!confirm("Are you sure you want to delete?")) return;
  let resp=this.service.deleteVehicle(insuranceId);
  resp.subscribe((data)=>this.vehicles=data);

    let resp1=this.service.deleteVehicle(insuranceId);
    resp.subscribe((data)=>this.vehicles=data);
    }
    public findUserById(insuranceId:number){
      console.log("findUserById")
      let resp=this.service.findUserById(this.insuranceId);
      resp.subscribe((data)=>this.vehicles=data);
    }
  
    public updateVehicle(insuranceId:number){
      this.router.navigate(['updateVehicle',insuranceId])
    }
    
  
  
}



