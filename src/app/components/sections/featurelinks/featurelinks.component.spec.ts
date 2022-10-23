import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturelinksComponent } from './featurelinks.component';

describe('FeaturelinksComponent', () => {
  let component: FeaturelinksComponent;
  let fixture: ComponentFixture<FeaturelinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturelinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturelinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
