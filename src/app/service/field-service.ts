import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, Headers, RequestOptionsArgs } from "@angular/http";
import 'rxjs/add/operator/toPromise';

export interface Field {
  FID?;
  fieldName?;
  rwfType?;
  rwfLength?;
  trwfType?;
  trwfLength?;
  fieldStatus?;
  fieldDescription?;
}


@Injectable()
export class FieldService {

  constructor(private http: Http) {
  }

  getFieldList() {
    return this.http.get('assets/data/mfl.json')
                    .toPromise()
                    .then(res => {console.log(res.json()); return<Field[]>res.json().result;})
  }
}
