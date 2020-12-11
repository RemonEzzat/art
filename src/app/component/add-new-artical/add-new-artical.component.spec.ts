import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewArticalComponent } from './add-new-artical.component';

describe('AddNewArticalComponent', () => {
  let component: AddNewArticalComponent;
  let fixture: ComponentFixture<AddNewArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewArticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
