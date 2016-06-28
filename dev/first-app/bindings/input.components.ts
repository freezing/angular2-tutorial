import {Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
    selector: 'my-input',
    styleUrls: ['./src/css/my-first-app.css'],
    template: `
<h1>Your details, please</h1>
<div>
    <label for="name">Your name</label>
    <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
</div>
<div>
    <label for="age">Your age</label>
    <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
</div>
<br/>
<div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
<div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
<button [disabled]="!isValid" (click)="onSubmit()">Submit</button>
`
})
export class MyInputComponent {
    @Input("myself")
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;

    @Output("submitted")
    submitted = new EventEmitter<{name: string, age: string}>();

    onSubmit() {
        this.submitted.emit(this.myself);
    }

    onKeyup() {
        if (this.myself.name != ' ' && this.myself.age != ' ') {
            this.isFilled = true;
        } else {
            this.isFilled = false;
        }

        if (this.myself.name != ' ' && /^\d+$/.test(this.myself.age)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }
}