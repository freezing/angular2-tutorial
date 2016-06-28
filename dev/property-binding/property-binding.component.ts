import {Component, Input, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'my-property-binding',
    template:`
    <h2>This is the child component</h2>
    <p>Hey {{name}}! You are {{age}} years old!</p>
    <h4>My hobbies are:</h4>
    <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
`,
})
export class PropertyBindingComponent {
    @Input('myName')
    name: string

    @Input('myAge')
    age: number

    @Output('hobbiesChanged')
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies: string) {
        this.hobbiesChanged.emit(hobbies);
    }
}