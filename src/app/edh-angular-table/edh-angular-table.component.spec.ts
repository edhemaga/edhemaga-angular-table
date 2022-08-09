import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdhAngularTableComponent } from './edh-angular-table.component';

describe('EdhAngularTableComponent', () => {
  let component: EdhAngularTableComponent<any>;
  let fixture: ComponentFixture<EdhAngularTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdhAngularTableComponent]
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
