import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Food } from './food.model'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(): Observable<Food[]>{
    return this.http.get<Food[]>('/assets/foodlist.json');
}

}
