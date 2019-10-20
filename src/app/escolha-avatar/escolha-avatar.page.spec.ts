import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaAvatarPage } from './escolha-avatar.page';

describe('EscolhaAvatarPage', () => {
  let component: EscolhaAvatarPage;
  let fixture: ComponentFixture<EscolhaAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhaAvatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
