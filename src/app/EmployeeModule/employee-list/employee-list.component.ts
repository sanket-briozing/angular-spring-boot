import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from "../employee";
import { Router } from '@angular/router';
import { EmployeeService } from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  search : String;
  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

  addEmployee(){
    this.router.navigate(['/add']);
  }

  onSubmit() {
    this.employees=this.employeeService.getEmployeesByName(this.search);
  }
}
