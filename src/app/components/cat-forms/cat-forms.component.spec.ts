import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFormsComponent } from './cat-forms.component';

describe('CatFormsComponent', () => {
  let component: CatFormsComponent;
  let fixture: ComponentFixture<CatFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
