import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
/**
 * Only supports string sorting, not alphanumeric strings
 */
export class SortPipe implements PipeTransform {
  transform(
    value: any[] | null,
    sortByKey: string,
    sortDirection: 'ASC' | 'DESC' | undefined
  ): any[] | null {
    console.log(value);
    if (
      sortDirection &&
      value?.length &&
      typeof value[0][sortByKey] === 'string'
    ) {
      const sorted = [...value].sort((a, b) => {
        return (a[sortByKey] as string).localeCompare(b[sortByKey] as string);
      });

      if (sortDirection === 'DESC') return sorted.reverse();
      return sorted;
    }
    return value;
  }
}
