import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactsContainer } from './containers/contacts/contacts.container';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactsContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule {

}
