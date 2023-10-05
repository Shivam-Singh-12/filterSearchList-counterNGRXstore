import { Component } from '@angular/core';
import { CountrydetailsService } from './countrydetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country';
  searchText:string = '';
  countries:any[] = [];
  filteredCountries:any[] = [];

  constructor(private countryService: CountrydetailsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.countryService.getCountries().subscribe((data:any[]) =>{
      this.countries = data;
      console.log("this.countries : ", this.countries);
      
    });
  }
  onSearch(): void{
    this.filteredCountries=this.countries.filter(country =>
      country.name.common.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
