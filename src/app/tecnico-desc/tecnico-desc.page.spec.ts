import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoDescPage } from './tecnico-desc.page';

describe('TecnicoDescPage', () => {
  let component: TecnicoDescPage;
  let fixture: ComponentFixture<TecnicoDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
