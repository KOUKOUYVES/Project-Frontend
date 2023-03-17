import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRapportComponent } from './delete-rapport.component';

describe('DeleteRapportComponent', () => {
  let component: DeleteRapportComponent;
  let fixture: ComponentFixture<DeleteRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRapportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
