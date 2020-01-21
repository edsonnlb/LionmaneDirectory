import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ContactService } from '../../../core/services/contacts/contacts.service';
import { Contact } from '../../../core/models/contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactService
  ) { }

  ngOnInit() {
    this.contact$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.contactsService.getContact(params.id);
      })
    );
  }

}
