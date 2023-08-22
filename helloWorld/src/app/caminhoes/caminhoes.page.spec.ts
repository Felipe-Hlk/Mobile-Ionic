import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaminhoesPage } from './caminhoes.page';

describe('CaminhoesPage', () => {
  let component: CaminhoesPage;
  let fixture: ComponentFixture<CaminhoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaminhoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
