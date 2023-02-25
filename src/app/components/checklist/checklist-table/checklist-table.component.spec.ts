import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistTableComponent } from './checklist-table.component';

describe('ListComponent', () => {
  let component: ChecklistTableComponent;
  let fixture: ComponentFixture<ChecklistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChecklistTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
