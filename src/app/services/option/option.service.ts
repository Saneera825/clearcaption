import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from './../../globals';
import 'rxjs/add/operator/map';
import { Option } from './option';


@Injectable()
export class OptionService {

private _wpBase = GlobalVariable.BASE_API_URL;
constructor(private http:Http) { }

getOption(): Observable<Option>{

    return this.http
    .get(this._wpBase + `acf/v2/options`)
    .map((res: Response)=>res.json());
  }
}


