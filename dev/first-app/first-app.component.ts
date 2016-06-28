import {Component} from '@angular/core';
import {MyInputComponent} from "./bindings/input.components";
import {MyConfirmComponent} from "./bindings/confirm.components";

@Component({
    selector: 'my-first-app',
    template: `
<div class="container">
    <my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>        
</div>
<div class="container">
    <my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>
</div>
    `,
    directives: [MyInputComponent, MyConfirmComponent],
    styleUrls: ['./src/css/my-first-app.css']
})
export class MyFirstAppComponent {
    myself = {name: '', age: ''};
    confirmedMyself = {name: '', age: ''};

    onSubmit(myself: {name: string, age: string}) {
        this.myself = myself;
    }

    onConfirm(myself: {name: string, age: string}) {
        this.confirmedMyself = myself;
    }
}