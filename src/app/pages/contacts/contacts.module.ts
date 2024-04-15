import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';


@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
