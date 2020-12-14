import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service'

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor(private service: FoodService) { }

  food: Food[]

  ngOnInit(): void {

  
  this.service.getFood().subscribe((data) => {this.food = data});


  }
}
