import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root',
})
export class FoodServicesService {
  constructor() {}
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'dish-01',
        price: 20,
        cookTime: '30-50',
        favorite: true,
        origins: ['India', 'Pakistan'],
        star: 3.8,
        imageurl: '/assets/images/foods/food-01.jpeg',
        tags: ['Lunch', 'SlowFood'],
      },
      {
        id: 2,
        name: 'dish-02',
        price: 50,
        cookTime: '30-40',
        favorite: true,
        origins: ['India', 'America'],
        star: 4.8,
        imageurl: '/assets/images/foods/food-02.jpeg',
        tags: ['Dinner', 'FastFood'],
      },
      {
        id: 3,
        name: 'dish-03',
        price: 80,
        cookTime: '40-50',
        favorite: true,
        origins: ['UK', 'America'],
        star: 4.5,
        imageurl: '/assets/images/foods/food-03.jpeg',
        tags: ['Snacks', 'FastFood'],
      },
      {
        id: 4,
        name: 'dish-04',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['France', 'taly'],
        star: 4.1,
        imageurl: '/assets/images/foods/food-04.jpeg',
        tags: ['Breakfast', 'Food'],
      },
      {
        id: 5,
        name: 'dish-05',
        price: 90,
        cookTime: '50-60',
        favorite: false,
        origins: ['Russia', 'Armenia'],
        star: 3.5,
        imageurl: '/assets/images/foods/food-05.jpeg',
        tags: ['Dinner', 'Slow'],
      },
      {
        id: 6,
        name: 'dish-05',
        price: 90,
        cookTime: '50-60',
        favorite: false,
        origins: ['Russia', 'Armenia'],
        star: 3.5,
        imageurl: '/assets/images/foods/food-06.jpg',
        tags: ['Dinner', 'Slow'],
      },
      {
        id: 4,
        name: 'dish-04',
        price: 20,
        cookTime: '20-30',
        favorite: false,
        origins: ['France', 'taly'],
        star: 4.1,
        imageurl: '/assets/images/foods/food-04.jpeg',
        tags: ['Breakfast', 'Food'],
      },
      {
        id: 2,
        name: 'dish-02',
        price: 50,
        cookTime: '30-40',
        favorite: true,
        origins: ['India', 'America'],
        star: 4.8,
        imageurl: '/assets/images/foods/food-02.jpeg',
        tags: ['Dinner', 'FastFood'],
      },
    ];
  }
}
