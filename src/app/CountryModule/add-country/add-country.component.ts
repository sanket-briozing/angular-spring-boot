import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  country: Country = new Country();
  submitted = false;

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.country = new Country();
  }

  save() {
    this.countryService
    .addCountry(this.country).subscribe(data => {
      console.log(data)
      this.country = new Country();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
  }

  gotoList() {
    this.router.navigate(['/countries']);
  }

}
