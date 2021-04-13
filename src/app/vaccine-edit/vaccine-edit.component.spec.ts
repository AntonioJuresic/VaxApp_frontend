import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineEditComponent } from './vaccine-edit.component';

describe('VaccineEditComponent', () => {
  let component: VaccineEditComponent;
  let fixture: ComponentFixture<VaccineEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
