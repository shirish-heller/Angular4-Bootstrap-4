import { Component, Host, OnInit} from '@angular/core';
import { httpService} from '../app.service';

@Component ({
    moduleId: module.id,
    selector: 'custComp-tag',
    templateUrl: './customComp.component.html',
    providers: [httpService],
     styles:  [`
            .bgcolor {
                background-color:green;
            }
            .fontColor {
                color:white;
            }
            `
    ]
  
})

export class custCompClass implements OnInit{

    public header = "Angular JS is COOL :)";
    public imgLink = "http://lorempixel.com/750/350";
    public firstName:string='';
    public lastName:string='';
    //public color="This is color Mad";
    public colors = ["red", "green", "blue"];
    public pControl = true;
    public bgcontrol = true;
    public fontControl = true;
    public style="italic";
    public size= "20px";
    public focusControlbg1 = "rgba(121,121,121,0.55)";
    public focusControlbg2 = "rgba(121,121,121,0.55)";
    onClick() {
        this.fontControl= !this.fontControl;
        this.bgcontrol = !this.bgcontrol;

    }
    onFocus1() {
        this.focusControlbg1 = "black";
    }
    onBlur1() {
        this.focusControlbg1 = "rgba(121,121,121,0.55)"
    }
    onFocus2() {
        this.focusControlbg2 = "black";
    }
    onBlur2() {
        this.focusControlbg2 = "rgba(121,121,121,0.55)"
    }

    employees= [];

    constructor (private _employeeSrv:httpService ) {}

        ngOnInit() {
            //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
            //Add 'implements OnInit' to the class.
            this._employeeSrv.getHttpData()
            .subscribe(respEmpData => this.employees = respEmpData)
        }
        
    


}