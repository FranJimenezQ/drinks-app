import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DrinksService } from './services/drinks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public dataDrinks: any[] = [];
  constructor(private drinksService: DrinksService) {

  }

  ngOnInit(): void {

  }

  getDrink(drinkName: string) {
    this.drinksService.getDrinks(drinkName)
      .pipe(
        map(data => data.drinks)
      )
      .subscribe((data: any) => {
        console.log(data)
        if (data instanceof Array) this.dataDrinks = data;
        if (data?.drinks) this.dataDrinks = data.drinks;
      });
    console.error();

  }


  submitDrinkName(drinkName: HTMLInputElement) {
    this.getDrink(drinkName.value);
    drinkName.value = "";
    drinkName.focus();
    return false;
  }
}

