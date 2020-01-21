import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './services/contacts/contacts.service';
import { PhoneService } from './services/phones/phones.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    PhoneService
  ]
})
export class CoreModule { }
