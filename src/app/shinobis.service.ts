import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shinobi } from '../app/models/shinobi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShinobisService {

  API_URI = 'http://localhost:58624/api';

  constructor(private http: HttpClient) { }

  getShinobis() {
    return this.http.get(`${this.API_URI}/Shinobi`);
  }

  getShinobi(id: string) {
    return this.http.get(`${this.API_URI}/Shinobi/${id}`);
  }

  deleteShinobi(id: number) {
    return this.http.delete(`${this.API_URI}/Shinobi?id=${id}`);
  }

  saveShinobi(shinobi: Shinobi) {
    return this.http.post(`${this.API_URI}/Shinobi`, shinobi);
  }

  updateShinobi(updatedShinobi: Shinobi): Observable<any> {
    return this.http.put(`${this.API_URI}/Shinobi`, updatedShinobi);
  }

}
