import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineNewComponent } from './vaccine-new.component';

describe('VaccineNewComponent', () => {
  let component: VaccineNewComponent;
  let fixture: ComponentFixture<VaccineNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
