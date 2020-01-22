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

  avatarUrl = '';

  constructor(
    private contactsService: ContactService
  ) { }

  ngOnInit() {
    this.contactsService.getAvatar(this.contact.contact_id)
      .subscribe(url => { this.avatarUrl = url.toString(); });
  }

  deleteContact() {
    if (confirm('¿Delete ' + this.contact.first_name + ' ' + this.contact.last_name + '?')) {
      this.contactsService.deleteContact(this.contact.contact_id).subscribe(() => {
        this.contactDeleted.emit(this.contact);
      });
    }
  }

}
