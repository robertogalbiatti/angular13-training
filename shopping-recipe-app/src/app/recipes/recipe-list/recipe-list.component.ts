import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/09/04/1175385610-torta-pao-de-forma-com-carne-768x512.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
