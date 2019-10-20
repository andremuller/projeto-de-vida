import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicaDescPage } from './matematica-desc.page';

describe('MatematicaDescPage', () => {
  let component: MatematicaDescPage;
  let fixture: ComponentFixture<MatematicaDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicaDescPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicaDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
