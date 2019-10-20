import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagemDescPage } from './linguagem-desc.page';

describe('LinguagemDescPage', () => {
  let component: LinguagemDescPage;
  let fixture: ComponentFixture<LinguagemDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinguagemDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinguagemDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
