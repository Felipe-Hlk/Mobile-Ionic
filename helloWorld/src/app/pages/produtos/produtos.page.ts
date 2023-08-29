import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {
      nome:"Produto 1",
      descricao:"Descrição Produto 1",
      valor:120,
      foto:'https://brilux.com.br/wp-content/uploads/2022/10/produtos-747x500.png'
    },
    {
      nome:"Produto 4",
      descricao:"Descrição Produto 4",
      valor:200,
      foto:'https://capricho.abril.com.br/wp-content/uploads/2023/07/promocoes-esquenta-prime-day-amazon.jpg?quality=85&strip=info&w=1000&h=666&crop=1'
    },
    {
      nome:"Produto 7",
      descricao:"Descrição Produto 7",
      valor:500,
      foto:'https://blog.ingredientesonline.com.br/wp-content/uploads/2020/07/produtos-naturais-goiania_capa-e1590413053661-1-1-750x482.jpg'
    },
    {
      nome:"Produto 5",
      descricao:"Descrição Produto 5",
      valor:270,
      foto:'https://www.assai.com.br/sites/default/files/produtos-perdigao-assai-atacadista.jpg'
    },
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto:any){
    this.bdtemp.addProdutoCarrinho(produto);
    this.bucarDadosCarrinho();
  }

  bucarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }

}