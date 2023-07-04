import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDynamicDataComponent } from './table-dynamic-data.component';

describe('TableDynamicDataComponent', () => {
  let component: TableDynamicDataComponent;
  let fixture: ComponentFixture<TableDynamicDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDynamicDataComponent]
    });
    fixture = TestBed.createComponent(TableDynamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
