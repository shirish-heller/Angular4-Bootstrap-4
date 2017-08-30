import {HttpModule, Response} from '@angular/http';
import { OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
export class depInjservice {
    private _url = ".../apiData/employeeData.json";
    constructor(_xyz:HttpModule) {}
    getDataInj() {
        return this._http.get(this._url)
        .map((response:Response ) => response.json())
    }

}