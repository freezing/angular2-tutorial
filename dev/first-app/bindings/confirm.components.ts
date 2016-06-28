import {Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
    selector: 'my-confirm',
    styleUrls: ['./src/css/my-first-app.css'],
    template:`
<h1>You submitted the following details. Is this correct?</h1>
<p>Your name is <span class="highlight">{{myself.name}}</span> and you're <span class="highlight">{{myself.age}}</span> years old.
Please click confirm if you have made any changes to this information.</p>
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
<button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
`
})
export class MyConfirmComponent {
    @Input("myself")
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;

    @Output("confirmed")
    confirmed = new EventEmitter<{name: string, age: string}>();

    onConfirm() {
        this.confirmed.emit(this.myself);
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