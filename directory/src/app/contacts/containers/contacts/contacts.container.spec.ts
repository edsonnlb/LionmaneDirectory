import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsContainer } from './contacts.container';

xdescribe('ProductsComponent', () => {
  let component: ContactsContainer;
  let fixture: ComponentFixture<ContactsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
