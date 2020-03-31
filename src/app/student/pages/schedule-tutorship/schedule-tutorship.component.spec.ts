import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTutorshipComponent } from './schedule-tutorship.component';

describe('ScheduleTutorshipComponent', () => {
  let component: ScheduleTutorshipComponent;
  let fixture: ComponentFixture<ScheduleTutorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTutorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
