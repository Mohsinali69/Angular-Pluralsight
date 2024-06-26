import { Pipe,PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name:'convertToSpace'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string) {
      return value.replace(character, ' ');
    }
    
}