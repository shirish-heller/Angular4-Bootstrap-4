import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'starter-template-form',
    templateUrl: 'starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() { 
        this.customer = {
            firstName: 'Heller Template'
        };
    }

    onSubmit() {
        this.message = 'You typed: ' + this.customer.firstName;
    }

}