import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyPipe',
  standalone: true
})
export class CompanyPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
