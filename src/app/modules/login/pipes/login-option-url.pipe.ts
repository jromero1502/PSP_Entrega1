import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loginOptionUrl'
})
export class LoginOptionUrlPipe implements PipeTransform {

  transform(value: string): string {
    return `url('${value}')`;
  }

}
