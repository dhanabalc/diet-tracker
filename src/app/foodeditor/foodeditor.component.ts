import { Component, OnInit } from '@angular/core';
import {Food} from './food';

@Component({
  selector: 'app-foodeditor',
  templateUrl: './foodeditor.component.html',
  styleUrls: ['./foodeditor.component.css']
})
export class FoodEditorComponent implements OnInit {

  constructor() { }

  foodList:Food[] = [];

  validFoodNames:string[] = ["fruits", "vegetables", "milk", "rice"];

  ngOnInit() {
  }

  onAddFood(){   
     this.foodList.push({name:"", quantity:0, unit:""})
  }
  
  onValidateFoodName(foodIndex:number){ 
    if(this.foodList && this.foodList.length)
    {
        var foodName = this.foodList[foodIndex].name;
        var isValidFood = false;
        this.validFoodNames.forEach(validFoodName => 
        {
          if(validFoodName.includes(foodName.toLowerCase()))
          {
            this.foodList[foodIndex].name = validFoodName;
            isValidFood = true;
            return;
          }
        }
        );

       if(!isValidFood)
        this.foodList[foodIndex].name = "";
    }
  }

  onRemoveFood(foodIndex:number){
    this.foodList.splice(foodIndex,1);
  }

  getUnitName(name):string{
    if(name == 'fruits')
    return 'cups'
  }

}
