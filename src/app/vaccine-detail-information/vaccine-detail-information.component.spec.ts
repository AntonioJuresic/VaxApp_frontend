import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineDetailInformationComponent } from './vaccine-detail-information.component';

describe('VaccineDetailInformationComponent', () => {
  let component: VaccineDetailInformationComponent;
  let fixture: ComponentFixture<VaccineDetailInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineDetailInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
