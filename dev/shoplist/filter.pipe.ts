
import {Pipe, PipeTransform} from "@angular/core";
import {ListItem} from "./list-item";
@Pipe({
    name: 'myFilter'
})
export class FilterPipe implements PipeTransform {
    transform(value: ListItem[], args: string[]):any {
        if (value.length == 0) return value;

        let result = [];
        for (let item of value) {
            console.log(args[0]);
            if (item.name.match(args[0])) {
                result.push(item);
            }
        }
        return result;
    }

}