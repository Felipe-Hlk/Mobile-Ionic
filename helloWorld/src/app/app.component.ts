import { Component, ElementRef, ViewChild } from '@angular/core';

interface MenuItem {
  link: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  public smallScreen = false;

  public items_menu: MenuItem[] = [
    {
      link: '/home',
      icon: 'fas fa-chart-line',
      label: 'Home'
    },
    {
      link: '/produtos',
      icon: 'fas fa-graduation-cap',
      label: 'Produtos'
    },
    {
      link: '/carrinho',
      icon: 'fas fa-headset',
      label: 'Carrinho'
    }
  ];

  public menuName = '';
  menu: any;


  constructor() {}

  get sidenavMode() {
    return this.smallScreen ? 'over' : 'side';
  }



}
