import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
 
  url: string = environment.url;

  constructor(private httpClient: HttpClient) {

  }
  private headerL = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  
  async getTicketByCompany(companyId) { 
    let params = {companyId: companyId};
    return await this.httpClient.post(this.url+'ticket/getByCompany', params, { headers: this.headerL }).toPromise();
  }

  async getTicketByUser(userId)  {
    let params = {userId: userId};
    return await this.httpClient.post(this.url+'ticket/getByUser', params, { headers: this.headerL }).toPromise();
  }

  async updateTicket(params) {  
    return await this.httpClient.post(this.url+'ticket/update', params, { headers: this.headerL }).toPromise();
  }

  async createTicket(params) {  
    return await this.httpClient.post(this.url+'ticket/create', params, { headers: this.headerL }).toPromise();
  }

}
