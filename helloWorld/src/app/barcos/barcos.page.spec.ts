import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarcosPage } from './barcos.page';

describe('BarcosPage', () => {
  let component: BarcosPage;
  let fixture: ComponentFixture<BarcosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BarcosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
