import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";


@Pipe({
 name:'convertToUnits'
})
export class ConvertToUnitsPipe implements PipeTransform{

    transform(value:string):string{
  
     switch(value.toLowerCase())
     {
         case "fruits":
         case "vegetables":
         case "rice":
         return "cup(s)";

         case "milk":
         return "ounce(s)";
         
     }
    }
}