import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsComponent } from './starwars.component';

describe('StarwarsComponent', () => {
  let component: StarwarsComponent;
  let fixture: ComponentFixture<StarwarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
