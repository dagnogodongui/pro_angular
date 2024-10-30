import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeleveComponent } from './addeleve.component';

describe('AddeleveComponent', () => {
  let component: AddeleveComponent;
  let fixture: ComponentFixture<AddeleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddeleveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
