import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListDisplayComponent } from './search-list-display.component';

describe('SearchListDisplayComponent', () => {
  let component: SearchListDisplayComponent;
  let fixture: ComponentFixture<SearchListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListDisplayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
