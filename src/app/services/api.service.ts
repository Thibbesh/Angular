import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  TECH_API_URL = '../assets/techdata.json'; 
  BUSINESS_API_URL = '../assets/businessdata.json';
  constructor(private httpClient: HttpClient) { }

  public getTechEmployees() {
    return this.httpClient.get(this.TECH_API_URL);
  }

  public getBusinessEmployees() {
    return this.httpClient.get(this.BUSINESS_API_URL);
  }
}
