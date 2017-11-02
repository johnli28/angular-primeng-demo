import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { TabMenuModule,
         MenubarModule,
         DataTableModule,
         ButtonModule,
         TabViewModule,
         PanelModule,
         DropdownModule,
         ConfirmDialogModule,
         BlockUIModule
       } from 'primeng/primeng';

import { FieldMgrRoutingModule } from './field-mgr-routing.module';
import { FieldMgrComponent } from './field-mgr.component';
import { FieldListComponent } from '../field-list/field-list.component';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FieldMgrRoutingModule,
    TabMenuModule,
    MenubarModule,
    DataTableModule,
    ButtonModule,
    TabViewModule,
    PanelModule,
    DropdownModule,
    ConfirmDialogModule,
    BlockUIModule
  ],
  declarations: [
    FieldMgrComponent,
    FieldListComponent
  ],
  exports: [
    FieldMgrRoutingModule
  ]
})
export class FieldMgrModule {}
