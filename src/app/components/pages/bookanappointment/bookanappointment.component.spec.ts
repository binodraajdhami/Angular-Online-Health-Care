import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookanappointmentComponent } from './bookanappointment.component';

describe('BookanappointmentComponent', () => {
  let component: BookanappointmentComponent;
  let fixture: ComponentFixture<BookanappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookanappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookanappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
