import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntTableComponent } from './volunt-table.component';

describe('VoluntTableComponent', () => {
  let component: VoluntTableComponent;
  let fixture: ComponentFixture<VoluntTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
