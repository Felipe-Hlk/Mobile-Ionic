import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvioesPage } from './avioes.page';

describe('AvioesPage', () => {
  let component: AvioesPage;
  let fixture: ComponentFixture<AvioesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvioesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
