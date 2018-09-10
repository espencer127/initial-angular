import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikePartRowComponent } from './bike-part-row.component';

describe('BikePartRowComponent', () => {
  let component: BikePartRowComponent;
  let fixture: ComponentFixture<BikePartRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikePartRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikePartRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
