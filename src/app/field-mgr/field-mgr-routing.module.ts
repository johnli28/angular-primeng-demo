import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FieldMgrComponent } from './field-mgr.component'
import { FieldListComponent } from '../field-list/field-list.component'

const fieldMgrRouters: Routes = [
  {
    path: '',
    component: FieldMgrComponent,
    children: [
      {
        path: '',
        component: FieldListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(fieldMgrRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class FieldMgrRoutingModule {}
