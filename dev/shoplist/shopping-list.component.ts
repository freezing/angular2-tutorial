import {Component, EventEmitter} from "@angular/core";
import {ShoppingListNewItemComponent} from "./shopping-new-item.component";
import {ListItem} from "./list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";

@Component({
    selector: 'shopping-list',
    styleUrls: ['./src/css/shoplist.css'],
    template: `
<section>

</section>
    <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
<section>

<h3>My list</h3>
<div class="list">
    <ul>
    <li *ngFor="let item of listItems" (click)="onSelectItem(item)">{{item.name}} ({{item.amount}})</li>
</ul>
</div>

</section>

<section *ngIf="selectedItem != null">
    <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)"></shopping-list-item>
</section>
`,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent]
})
export class ShoppingListComponent {
    listItems = new Array<ListItem>();
    selectedItem: ListItem = null;

    onItemAdded(item: ListItem) {
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onSelectItem(item: ListItem) {
        this.selectedItem = item;
    }

    onRemove(item: ListItem) {
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = null;
    }
}