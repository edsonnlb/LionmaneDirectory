import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Contact } from '../../../core/models/contact.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  @Input() contact: Contact;
  @Output() contactClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  showContactDetail() {
    console.log('show detail');

  }

}
