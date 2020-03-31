import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTutorshipComponent } from './accept-tutorship.component';

describe('AcceptTutorshipComponent', () => {
  let component: AcceptTutorshipComponent;
  let fixture: ComponentFixture<AcceptTutorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptTutorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptTutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
