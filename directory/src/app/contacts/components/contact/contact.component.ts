import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Contact } from '../../../core/models/contact.model';
import { ContactService } from 'src/app/core/services/contacts/contacts.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  deleteContact() {
    if (confirm('¿Delete ' + this.contact.first_name + ' ' + this.contact.last_name + '?')) {
      this.contactService.deleteContact(this.contact.contact_id).subscribe(() => {
        this.contactDeleted.emit(this.contact);
      });
    }
  }

}
