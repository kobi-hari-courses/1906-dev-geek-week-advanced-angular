import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterViewerComponent } from './counter-viewer.component';

describe('CounterViewerComponent', () => {
  let component: CounterViewerComponent;
  let fixture: ComponentFixture<CounterViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
