import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthpakagesComponent } from './healthpakages.component';

describe('HealthpakagesComponent', () => {
  let component: HealthpakagesComponent;
  let fixture: ComponentFixture<HealthpakagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthpakagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthpakagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
