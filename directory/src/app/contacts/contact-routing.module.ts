import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactsContainer } from './containers/contacts/contacts.container';

const routes: Routes = [
  {
    path: '',
    component: ContactsContainer
  },
  {
    path: ':id',
    component: ContactDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}
