import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideEffectByResearchNameComponent } from './side-effect-by-research-name.component';

describe('SideEffectByResearchNameComponent', () => {
  let component: SideEffectByResearchNameComponent;
  let fixture: ComponentFixture<SideEffectByResearchNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideEffectByResearchNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideEffectByResearchNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
