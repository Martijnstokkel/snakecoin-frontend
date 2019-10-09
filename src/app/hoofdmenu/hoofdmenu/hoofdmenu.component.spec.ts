import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoofdmenuComponent } from './hoofdmenu.component';

describe('HoofdmenuComponent', () => {
  let component: HoofdmenuComponent;
  let fixture: ComponentFixture<HoofdmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoofdmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoofdmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
