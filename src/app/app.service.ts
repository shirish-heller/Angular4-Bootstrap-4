import { Http, Response} from '@angular/http';
import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable ()

export class httpService {
    private _url:string="../apiData/employeeData.json";
    constructor (private _http: Http){}
    getHttpData(){
        return this._http.get(this._url).map((response:Response) => response.json())
    }
}