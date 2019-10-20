import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinyleComponent } from './vinyle.component';

describe('VinyleComponent', () => {
  let component: VinyleComponent;
  let fixture: ComponentFixture<VinyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VinyleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
