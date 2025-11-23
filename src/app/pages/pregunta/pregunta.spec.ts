import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta } from './pregunta';

describe('Pregunta', () => {
  let component: Pregunta;
  let fixture: ComponentFixture<Pregunta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pregunta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pregunta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
