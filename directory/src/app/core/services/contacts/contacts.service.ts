import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../../models/contact.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  getAllContacts(needle: string, page: number, pageSize: number, sort: string, sortDir: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`${environment.api_url}/contacts?search=${needle}&page=${page}&pageSize=${pageSize}&sortBy=${sort}&sortDir=${sortDir}`);
  }

  getContact(id: string) {
    return this.http.get<Contact>(`${environment.api_url}/contacts/${id}`);
  }

  createContact(contact: Partial<Contact>) {
    return this.http.post(`${environment.api_url}/contacts`, contact);
  }

  updateContact(id: string, changes: Partial<Contact>) {
    return this.http.put(`${environment.api_url}/contacts/${id}`, changes);
  }

  deleteContact(id: number) {
    return this.http.delete(`${environment.api_url}/contacts/${id}`);
  }
}
