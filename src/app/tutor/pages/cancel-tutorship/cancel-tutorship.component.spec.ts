import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelTutorshipComponent } from './cancel-tutorship.component';

describe('CancelTutorshipComponent', () => {
  let component: CancelTutorshipComponent;
  let fixture: ComponentFixture<CancelTutorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelTutorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelTutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
