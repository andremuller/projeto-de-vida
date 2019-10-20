import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturaisDescPage } from './naturais-desc.page';

describe('NaturaisDescPage', () => {
  let component: NaturaisDescPage;
  let fixture: ComponentFixture<NaturaisDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturaisDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturaisDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
