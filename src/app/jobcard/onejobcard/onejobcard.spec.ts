import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onejobcard } from './onejobcard';

describe('Onejobcard', () => {
  let component: Onejobcard;
  let fixture: ComponentFixture<Onejobcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Onejobcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Onejobcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
