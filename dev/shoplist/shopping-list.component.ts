import {Component, EventEmitter, OnInit} from "@angular/core";
import {ShoppingListNewItemComponent} from "./shopping-new-item.component";
import {ListItem} from "./list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";
import {ShoppingListService} from "./shopping-list.service.td";
import {FilterPipe} from "./filter.pipe";

@Component({
    selector: 'shopping-list',
    styleUrls: ['./src/css/shoplist.css'],
    providers: [ShoppingListService],
    template: `
<section>

</section>
    <shopping-list-new-item></shopping-list-new-item>
<section>

<h3>My list</h3>
Filter:
<input type="text" #filter (keyup)="0">

<div class="list">
    <ul>
    <li *ngFor="let item of listItems | myFilter:[filter.value]" (click)="onSelectItem(item)">{{item.name}} ({{item.amount}})</li>
</ul>
</div>

</section>

<section *ngIf="selectedItem != null">
    <shopping-list-item [item]="selectedItem" (removed)="onRemove()"></shopping-list-item>
</section>
`,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    pipes: [FilterPipe]
})
export class ShoppingListComponent implements OnInit {
    ngOnInit():any {
        this.listItems = this._shoppingListService.getItems();
    }
    listItems: Array<ListItem>
    selectedItem: ListItem = null;

    constructor(private _shoppingListService: ShoppingListService) {

    }

    onSelectItem(item: ListItem) {
        this.selectedItem = item;
    }

    onRemove() {
        this.selectedItem = null;
    }
}