import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugsComponent } from './plugs.component';

describe('PlugsComponent', () => {
  let component: PlugsComponent;
  let fixture: ComponentFixture<PlugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
