import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabsferenciasComponent } from './trabsferencias.component';

describe('TrabsferenciasComponent', () => {
  let component: TrabsferenciasComponent;
  let fixture: ComponentFixture<TrabsferenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabsferenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabsferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
