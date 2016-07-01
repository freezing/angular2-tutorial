import {Component} from '@angular/core';
import {ParentPropertyComponent} from "./property-binding/property-binding-parent.component";
import {PuzzleComponent} from "./puzzle/puzzle.component";
import {MyFirstAppComponent} from "./first-app/first-app.component";
import {MyAttributeDirectivesComponent} from "./attribute-directives/attribute-directives.component";
import {MyStructuralDirectivesComponent} from "./attribute-directives/structural-directives.component";
import {ShoplistAppComponent} from "./shoplist/shoplist-app.component";

@Component({
    selector: 'my-app',
    template: `
        <!--<my-puzzle></my-puzzle>-->
        <!--<my-parent-property></my-parent-property>  -->
        <!--<my-first-app></my-first-app>-->
        <!--<my-attribute-directives></my-attribute-directives>-->
        <!--<br/><br/>-->
        <!--<h2>Structural directives</h2>-->
        <!--<my-structural-directives></my-structural-directives>-->
        <shoplist-app></shoplist-app>
    `,
    directives: [ShoplistAppComponent, MyStructuralDirectivesComponent, MyAttributeDirectivesComponent, MyFirstAppComponent, PuzzleComponent, ParentPropertyComponent]
})
export class AppComponent {
    
}