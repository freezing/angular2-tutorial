import {Component, Input, EventEmitter, Output} from "@angular/core";
import {ListItem} from "./list-item";

@Component({
    selector: 'shopping-list-item',
    styleUrls: ['./src/css/shoplist.css'],
    template: `
<div class="input">
    <label for="item-name">Name</label>
    <input type="text" id="item-name" [(ngModel)]="item.name">
</div>

<div class="input">
    <label for="item-amount">Amount</label>
    <input type="text" id="item-amount" [(ngModel)]="item.amount">
</div>

<button class="red" (click)="onDelete()">Delete item</button>
`
})
export class ShoppingListItemComponent {
    @Input() item: ListItem;

    @Output() removed = new EventEmitter<ListItem>();

    onDelete() {
        this.removed.emit(this.item);
    }
}