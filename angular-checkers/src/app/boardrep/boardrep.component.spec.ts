import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardrepComponent } from './boardrep.component';

describe('BoardrepComponent', () => {
  let component: BoardrepComponent;
  let fixture: ComponentFixture<BoardrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardrepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
