import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreiraPage } from './carreira.page';

describe('CarreiraPage', () => {
  let component: CarreiraPage;
  let fixture: ComponentFixture<CarreiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarreiraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
