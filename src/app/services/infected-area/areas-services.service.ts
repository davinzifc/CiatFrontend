import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasServicesService {
  private APIKEY: string = '6ffbf7ec41952eb6cfbb5057c9b938ca8da1d5cbde3edc51ef19c60c2c1450f9';
  constructor(private HttpClient: HttpClient) { }

  getListAreas() {
    return this.HttpClient.get('http://localhost:45000/zones/get/all',{
      headers:{
        'API-KEY': this.APIKEY
      }
    });
  }

  getInfectionByZone( id: string ) {
    return this.HttpClient.get(`http://localhost:45000/zones/get/location/info/${id}`,{
      headers:{
        'API-KEY': this.APIKEY
      }
    });
  }

  getPlantsByZone( id: string ) {
    return this.HttpClient.get(`http://localhost:45000/zones/get/plants/${id}`,{
      headers:{
        'API-KEY': this.APIKEY
      }
    });
  }
}
