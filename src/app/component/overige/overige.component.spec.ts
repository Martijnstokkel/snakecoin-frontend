import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverigeComponent } from './overige.component';

describe('OverigeComponent', () => {
  let component: OverigeComponent;
  let fixture: ComponentFixture<OverigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
