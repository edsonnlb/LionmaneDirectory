import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './components/contact/contact.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactsContainer } from './containers/contacts/contacts.container';
import { PhonesContainer } from './containers/phones/phones.container';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactDetailComponent,
    ContactsContainer,
    PhonesContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContactModule {

}
