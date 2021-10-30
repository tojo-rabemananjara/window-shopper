import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://assets.marthastewart.com/styles/wmax-750/d64/spaghetti-shrimp-kale-burst-tomatoes-3opjx3r7kne9vih450ih3t-0421/spaghetti-shrimp-kale-burst-tomatoes-3opjx3r7kne9vih450ih3t-0421_horiz.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
