import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproComponent } from './servicepro.component';

describe('ServiceproComponent', () => {
  let component: ServiceproComponent;
  let fixture: ComponentFixture<ServiceproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceproComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
