import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pregunta01Component } from './pregunta01.component';

describe('Pregunta01Component', () => {
  let component: Pregunta01Component;
  let fixture: ComponentFixture<Pregunta01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pregunta01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pregunta01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
