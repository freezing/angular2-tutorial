import {Component} from "@angular/core"

@Component({
    selector: 'my-component',
    template: `
        Hi, I'm {{name}} and this is my first angular2 component!
        <span [class.is-awesome]="inputElement.value === 'yes'">It's awesome!</span>
        <br/>
        <br/>
        Is it awesome?
        <input type="text" #inputElement (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent {
    name = "Nikola"
}