import { AddEmployeeComponent } from './EmployeeModule/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './EmployeeModule/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EmployeeModule/update-employee/update-employee.component';

const routes: Routes = [
{ path: '', redirectTo: 'employee', pathMatch: 'full' },
{ path: 'employees', component: EmployeeListComponent },
{ path: 'add', component: AddEmployeeComponent },
{ path: 'update/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
