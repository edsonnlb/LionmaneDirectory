import { Component, OnInit } from '@angular/core';

import { Contact } from './../../../core/models/contact.model';
import { ContactService } from './../../../core/services/contacts/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.container.html',
  styleUrls: ['./contacts.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ContactsContainer implements OnInit {

  contacts: Contact[] = [];

  searchText = '';
  currentPage = 1;
  pageSize = 10;
  sortField = 'first_name';
  sortDir = 'ASC';
  pageCount = 1;

  constructor(
    private contactsService: ContactService
  ) { }

  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contactsService.getAllContacts(this.searchText, this.currentPage, this.pageSize, this.sortField, this.sortDir)
    .subscribe(contacts => {
      // tslint:disable-next-line: no-string-literal
      this.pageCount = contacts['last_page'];
      // tslint:disable-next-line: no-string-literal
      this.contacts = contacts['data'];
    });
  }

  setCurrentPage(newPage: number) {
    this.currentPage = newPage;
    this.fetchContacts();
  }

  searchContacts() {
    this.currentPage = 1;
    this.fetchContacts();
  }

  setSort(sortField: string) {
    this.sortField = sortField;
    if (this.sortDir === 'DESC') {
      this.sortDir = 'ASC';
    } else {
      this.sortDir = 'DESC';
    }
    this.fetchContacts();
  }

}
