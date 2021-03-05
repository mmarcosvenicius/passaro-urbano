import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const [ate, de = 0] = args
    
    if (value.length > ate) {
      //retorna string truncada
      return value.substr(de, ate) + '...'
    }

    return value
  }

}
