import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  url: string = environment.url;

  constructor(private httpClient: HttpClient) {

  }
  private headerL = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  
  async getCompanies() { 
    return await this.httpClient.get(this.url+'company/companies', { headers: this.headerL }).toPromise();
  }

}
