import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8888/employee';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  addEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addEmployee`, employee);
  }

  updateEmployee(value: any,id: number): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateEmployee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEmployee/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAll`);
  }
}
