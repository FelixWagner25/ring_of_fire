import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirstPlayer } from './add-first-player';

describe('AddFirstPlayer', () => {
  let component: AddFirstPlayer;
  let fixture: ComponentFixture<AddFirstPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFirstPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFirstPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
