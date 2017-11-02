import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CompassHeaderComponent } from './compass-header/compass-header.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/fieldList', pathMatch: 'full' },
  { path: 'fieldList',   loadChildren: './field-mgr/field-mgr.module#FieldMgrModule', data: {preload: true}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
