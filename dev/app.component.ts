import {Component} from '@angular/core';
import {ParentPropertyComponent} from "./property-binding/property-binding-parent.component";
import {PuzzleComponent} from "./puzzle/puzzle.component";
import {MyFirstAppComponent} from "./first-app/first-app.component";

@Component({
    selector: 'my-app',
    template: `
        <!--<my-puzzle></my-puzzle>-->
        <!--<my-parent-property></my-parent-property>  -->
        <my-first-app></my-first-app>
    `,
    directives: [MyFirstAppComponent, PuzzleComponent, ParentPropertyComponent]
})
export class AppComponent {
}