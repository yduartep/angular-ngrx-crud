import {Pipe, PipeTransform} from '@angular/core';
import {KeyName} from './keyName';

@Pipe({
  name: 'extractNames'
})
export class ExtractNamesPipe implements PipeTransform {

  transform(items: number[], args: KeyName[]): any {
    if (items && items.length > 0 && args && args.length > 0) {
      return items.map(item => args.find(i => i.id === item).name).join(', ');
    }
    return items;
  }

}
