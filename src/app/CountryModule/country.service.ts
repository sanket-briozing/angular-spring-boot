import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:9092/country';

  constructor(private http: HttpClient) { }

  getCountry(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findById/${id}`);
  }

  addCountry(country: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, country);
  }

  updateCountry(value: any,id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getCountryList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAllCountries`);
  }
}
