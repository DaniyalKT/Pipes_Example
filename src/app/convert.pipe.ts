import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnit: string): unknown {
    if(!value){
      return ;;
    }
     console.log(targetUnit)
    switch (targetUnit) {
      case 'km':
        return value * 1.6093
      case 'm':
        return value * 1.6093 * 1000
      case 'cm':
        return value * 1.6093 * 1000 * 100
      default:
       throw new Error("not suported unit : " + targetUnit);
       
    }
  }

}
