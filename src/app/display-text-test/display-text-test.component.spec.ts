import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTextTestComponent } from './display-text-test.component';

describe('DisplayTextTestComponent', () => {
  let component: DisplayTextTestComponent;
  let fixture: ComponentFixture<DisplayTextTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTextTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTextTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
