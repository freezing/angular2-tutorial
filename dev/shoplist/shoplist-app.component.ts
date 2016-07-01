import {Component} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";

@Component({
    selector: 'shoplist-app',
    styleUrls: ['src/css/shoplist.css'],
    directives: [ShoppingListComponent],
    template: `

<header>
    <div class="brand">Shopping list</div>
</header>
<div class="main">
    <shopping-list></shopping-list>
</div>
`
})
export class ShoplistAppComponent {
    
}