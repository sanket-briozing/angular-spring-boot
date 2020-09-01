import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from 'src/app/CountryModule/country';
import { CountryService } from 'src/app/CountryModule/country.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  countries: Observable<Country[]>;

  constructor(private employeeService: EmployeeService,private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadCountries();
  }

  reloadCountries() {
    this.countries = this.countryService.getCountryList();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService
    .addEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
