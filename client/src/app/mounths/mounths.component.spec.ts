import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MounthsComponent } from './mounths.component';

describe('MounthsComponent', () => {
  let component: MounthsComponent;
  let fixture: ComponentFixture<MounthsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MounthsComponent]
    });
    fixture = TestBed.createComponent(MounthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
