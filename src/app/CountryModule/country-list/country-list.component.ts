import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Observable<Country[]>;
  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.countries = this.countryService.getCountryList();
  }

  deleteCountry(id: number) {
    this.countryService.deleteCountry(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCountry(id: number){
    this.router.navigate(['updateCountry', id]);
  }

  addCountry(){
    this.router.navigate(['/addCountry']);
  }

}
