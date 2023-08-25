import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {

  listaItens = [];

  constructor(public bdtemp: BdtempService) { }

  buscarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
  }

  ionViewWillEnter(){
    this.buscarItensCarrinho();
  }





}
