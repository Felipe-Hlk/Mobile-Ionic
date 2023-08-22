import { Component } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage {

  constructor(public bdtemp: BdtempService) { }

  addProdutoCarrinho(produto:any){
    this.bdtemp.addProdutoCarrinho(produto);
  }

 
}
