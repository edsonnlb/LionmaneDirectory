import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Phone } from '../../models/phone.model';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPhones() {
    return this.http.get<Phone[]>(`${environment.api_url}/phones`);
  }

  getPhonesByContact(contactId: number) {
    return this.http.get<Phone[]>(`${environment.api_url}/phones?contact_id=${contactId}`);
  }

  getPhone(id: number) {
    return this.http.get<Phone>(`${environment.api_url}/phones/${id}`);
  }

  createPhone(phone: Partial<Phone>) {
    console.log(phone);
    return this.http.post(`${environment.api_url}/phones`, phone);
  }

  updatePhone(id: number, changes: Partial<Phone>) {
    return this.http.put(`${environment.api_url}/phones/${id}`, changes);
  }

  deletePhone(id: number) {
    console.log(`${environment.api_url}/phones/${id}`);
    return this.http.delete(`${environment.api_url}/phones/${id}`);
  }
}
