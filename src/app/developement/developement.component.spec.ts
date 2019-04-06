import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopementComponent } from './developement.component';

describe('DevelopementComponent', () => {
  let component: DevelopementComponent;
  let fixture: ComponentFixture<DevelopementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
