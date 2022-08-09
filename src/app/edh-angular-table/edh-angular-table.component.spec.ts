import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdhAngularTableComponent } from './edh-angular-table.component';

describe('EdhAngularTableComponent', () => {
  let component: EdhAngularTableComponent;
  let fixture: ComponentFixture<EdhAngularTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdhAngularTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdhAngularTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
