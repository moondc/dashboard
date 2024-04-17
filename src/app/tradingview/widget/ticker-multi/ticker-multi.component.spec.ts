import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerMultiComponent } from './ticker-multi.component';

describe('TickerMultiComponent', () => {
  let component: TickerMultiComponent;
  let fixture: ComponentFixture<TickerMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickerMultiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TickerMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
