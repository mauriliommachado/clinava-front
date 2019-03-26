import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFlowComponent } from './report-flow.component';

describe('ReportFlowComponent', () => {
  let component: ReportFlowComponent;
  let fixture: ComponentFixture<ReportFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
