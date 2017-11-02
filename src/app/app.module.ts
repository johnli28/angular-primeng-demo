import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { TabMenuModule,
         ConfirmDialogModule,
         GrowlModule
       } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { CompassHeaderComponent } from './compass-header/compass-header.component';
import { CompassBodyComponent } from './compass-body/compass-body.component';
import { FieldMgrComponent } from './field-mgr/field-mgr.component';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldMgrModule } from './field-mgr/field-mgr.module';
import { FieldService } from './service/field-service';


@NgModule({
  declarations: [
    AppComponent,
    CompassHeaderComponent,
    CompassBodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabMenuModule,
    AppRoutingModule,
    FieldMgrModule
  ],
  providers: [FieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
