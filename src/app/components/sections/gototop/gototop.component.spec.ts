import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GototopComponent } from './gototop.component';

describe('GototopComponent', () => {
  let component: GototopComponent;
  let fixture: ComponentFixture<GototopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GototopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GototopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
