import { Component} from '@angular/core';
// import { templateFormsModuleClass} from './templateDrivenForms.module';
// import { AppModule} from '../app.module';

@Component ({
    selector: 'templateForm-tag',
    moduleId: module.id,
    templateUrl:  './templateDrivenForms.component.html' 
    
})

export class templateFormClass {
    onSubmit(data: any): void{
        console.log('DATA', data);
    }
}
