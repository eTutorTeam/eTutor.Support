import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTutorshipComponent } from './start-tutorship.component';

describe('StartTutorshipComponent', () => {
  let component: StartTutorshipComponent;
  let fixture: ComponentFixture<StartTutorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTutorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
