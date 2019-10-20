import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseEncountersComponent } from './close-encounters.component';

describe('CloseEncountersComponent', () => {
  let component: CloseEncountersComponent;
  let fixture: ComponentFixture<CloseEncountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloseEncountersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
