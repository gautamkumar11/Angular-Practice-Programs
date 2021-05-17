import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is simple test Recipe',
    'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg'
    ),
    new Recipe('Test Recipe','This is simple test Recipe',
    'https://www.forksoverknives.com/wp-content/uploads/vegan-quesadilla-recipe-quick-easy-plant-based-recipes.jpg'
    )];
  constructor() { }

  ngOnInit(): void {
  }

}
