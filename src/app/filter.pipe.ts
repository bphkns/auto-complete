import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchTerm: string, labelKey?: string) {
        console.log(items, searchTerm);
        if (!items || !searchTerm) {
            return null;
        }

        return items.filter(
            item => {
                return item.name.toLowerCase().includes(searchTerm.toLowerCase()) === true;
            });
    }
}
