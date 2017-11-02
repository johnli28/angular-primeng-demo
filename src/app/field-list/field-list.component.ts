import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

import { Field, FieldService } from '../service/field-service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fieldList: Field[];
  selectField: Field;
  selectedFields: Field[];

  constructor(private fieldService: FieldService,
              private router: Router) {
              }

  ngOnInit() {
    this.selectedFields = [];
    this.getFieldList();
    /*
    this.fieldList = [{
        "FID": "1",
        "fieldName": "PROD_PERM",
        "rwfType": "UNIT",
        "rwfLength": "3",
        "trwfType": "UNIT",
        "trwfLength": "3",
        "fieldStatus": "Active",
        "fieldDescription": "PERMISSION"
    }];
    */

  }

  getFieldList = () => {
    this.fieldList = [];
    return this.fieldService.getFieldList().then(fieldList => {
      this.fieldList = fieldList;
      return fieldList;
    });
  }

  onRowSelect(event) {
  }

  onRowUnselect(event) {
  }

}
