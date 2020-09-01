import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './EmployeeModule/add-employee/add-employee.component';
import { EmployeeListComponent } from './EmployeeModule/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EmployeeModule/update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddCountryComponent } from './CountryModule/add-country/add-country.component';
import { CountryListComponent } from './CountryModule/country-list/country-list.component';
import { UpdateCountryComponent } from './CountryModule/update-country/update-country.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    AddCountryComponent,
    CountryListComponent,
    UpdateCountryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
