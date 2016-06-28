import {Component} from '@angular/core';
import {PropertyBindingComponent} from "./property-binding.component";

@Component({
    selector: 'my-parent-property',
    template: `
    <section class="parent">
        <h2>This is the parent component</h2>
        <h4>Please enter your name:</h4>
        <input type="text" [(ngModel)]="name">
        <br/><br/>
        <p>{{name}}</p>
        <section class="child">
            <my-property-binding (hobbiesChanged)="hobbies = $event" [myAge]="24" [myName]="name"></my-property-binding>
        </section>
        <p>My hobbies are: {{hobbies}}</p>
        
    </section>
    `,
    styleUrls: ['./src/css/property-binding.css'],
    directives: [PropertyBindingComponent]
})
export class ParentPropertyComponent {
    name = '';
    hobbies = '';
}