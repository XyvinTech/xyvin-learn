import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSectionComponent } from './service-section.component';

describe('ServiceSectionComponent', () => {
  let component: ServiceSectionComponent;
  let fixture: ComponentFixture<ServiceSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceSectionComponent]
    });
    fixture = TestBed.createComponent(ServiceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
