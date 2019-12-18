import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiebenikComponent } from './wiebenik.component';

describe('WiebenikComponent', () => {
  let component: WiebenikComponent;
  let fixture: ComponentFixture<WiebenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiebenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiebenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
