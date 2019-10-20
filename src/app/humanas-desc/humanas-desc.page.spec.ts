import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanasDescPage } from './humanas-desc.page';

describe('HumanasDescPage', () => {
  let component: HumanasDescPage;
  let fixture: ComponentFixture<HumanasDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanasDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanasDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
