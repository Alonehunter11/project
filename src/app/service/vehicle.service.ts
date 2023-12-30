import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../entity/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  findUserById(insuranceId: number) {
    console.log("findUserById")
    return this.http.get("http://localhost:8889/vehicles/"+insuranceId)
  }
  deleteVehicle(insuranceId: number) {
   // if(!confirm("Are you sure you want to delete?")) return;
 
    console.log("deleteVehicle")
    return this.http.delete("http://localhost:8889/vehicles/"+insuranceId)
  }
  getvehicle() {
    console.log("getvehicle");
    return this.http.get("http://localhost:8889/getAllVehicles")
  }

  constructor(private http:HttpClient) { };
  public registerNow(vehicle: Vehicle){
   console.log("registerNow");
   return this.http.post<any>("http://localhost:8889/vehicle",vehicle )
 
 }
 updateVehicle(insuranceId: number, vehicle: Vehicle) {
  console.log("updateVehicle");
  return this.http.put("http://localhost:8889/vehicles/"+insuranceId,vehicle);
}
getVehicleById(insuranceId: number):Observable<Vehicle> {
  console.log("getVehicleById");
  console.log("Insurance id "+insuranceId);
  return this.http.get<Vehicle>("http://localhost:8889/vehicles/"+insuranceId);
} 
}




