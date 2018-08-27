import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedShopsComponent } from './prefered-shops.component';

describe('PreferedShopsComponent', () => {
  let component: PreferedShopsComponent;
  let fixture: ComponentFixture<PreferedShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferedShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
