import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private API_URL = 'https://reqres.in/api/';

  constructor(private http: HttpClient) {}
  getListUsers(page: number = 1 ) {
    return this.http.get(`${this.API_URL}users?page=${page}`);
  }

}
