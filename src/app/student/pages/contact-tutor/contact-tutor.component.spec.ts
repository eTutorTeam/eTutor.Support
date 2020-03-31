import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTutorComponent } from './contact-tutor.component';

describe('ContactTutorComponent', () => {
  let component: ContactTutorComponent;
  let fixture: ComponentFixture<ContactTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
