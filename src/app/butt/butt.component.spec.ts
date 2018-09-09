import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtComponent } from './butt.component';

describe('ButtComponent', () => {
  let component: ButtComponent;
  let fixture: ComponentFixture<ButtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
