import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  url: string = ""
  constructor(private httpCliente: HttpClient) {

    this.url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
   }

   getDrinks(drinkName: string): Observable<any>{
    return this.httpCliente.get(`${this.url}${drinkName}`)
   }
}
