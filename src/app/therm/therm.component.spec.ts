import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermComponent } from './therm.component';

describe('ThermComponent', () => {
  let component: ThermComponent;
  let fixture: ComponentFixture<ThermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
