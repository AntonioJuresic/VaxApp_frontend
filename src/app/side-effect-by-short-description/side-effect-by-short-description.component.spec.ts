import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideEffectByShortDescriptionComponent } from './side-effect-by-short-description.component';

describe('SideEffectByShortDescriptionComponent', () => {
  let component: SideEffectByShortDescriptionComponent;
  let fixture: ComponentFixture<SideEffectByShortDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideEffectByShortDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectByShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
