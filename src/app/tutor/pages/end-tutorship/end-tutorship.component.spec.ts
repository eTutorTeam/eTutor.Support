import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndTutorshipComponent } from './end-tutorship.component';

describe('EndTutorshipComponent', () => {
  let component: EndTutorshipComponent;
  let fixture: ComponentFixture<EndTutorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndTutorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndTutorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
