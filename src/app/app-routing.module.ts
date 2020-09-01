import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './EmployeeModule/add-employee/add-employee.component';
import { EmployeeListComponent } from './EmployeeModule/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EmployeeModule/update-employee/update-employee.component';
import { CountryListComponent } from './CountryModule/country-list/country-list.component';
import { AddCountryComponent } from './CountryModule/add-country/add-country.component';
import { UpdateCountryComponent } from './CountryModule/update-country/update-country.component';


const routes: Routes = [
// { path: '', redirectTo: 'employee', pathMatch: 'full' },
{ path: 'employees', component: EmployeeListComponent },
{ path: 'add', component: AddEmployeeComponent },
{ path: 'update/:id', component: UpdateEmployeeComponent },
{ path: 'countries', component: CountryListComponent },
{ path: 'addCountry', component: AddCountryComponent },
{ path: 'updateCountry/:id', component: UpdateCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
