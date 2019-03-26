import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProceduresComponent } from './add-procedures.component';

describe('AddProceduresComponent', () => {
  let component: AddProceduresComponent;
  let fixture: ComponentFixture<AddProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
