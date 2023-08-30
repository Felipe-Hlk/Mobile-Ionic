import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage {
  qtdeItensCarrinho = 0;
  total = 0;

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

  constructor(private bdtempService: BdtempService) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Obtenha os itens do carrinho e o qtdeItensCarrinho do serviço ao entrar na página
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho') || 0; // Adicione esta linha para exibir o total
  }

  addProdutoCarrinho(produto: any) {
    this.bdtempService.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho');
    this.total = this.bdtempService.buscar('totalCarrinho'); // Atualize o total após adicionar produto
  }

  removerItem(index: number) {
    this.bdtempService.removeProdutoCarrinho(index);
    this.listaProdutos = this.bdtempService.buscar('carrinho') || [];
    this.qtdeItensCarrinho = this.bdtempService.buscar('qtdeItensCarrinho') || 0;
    this.total = this.bdtempService.buscar('totalCarrinho'); // Atualize o total após remover produto
  }

  limparCarrinho() {
    this.bdtempService.limparCarrinho();
    this.listaProdutos = [];
    this.qtdeItensCarrinho = 0;
    this.total = 0; // Zere o total após limpar carrinho
  }

  concluirCompra() {
    const carrinho = this.bdtempService.buscar('carrinho');

    if (carrinho && carrinho.length > 0) {
      // Aqui você pode realizar as ações necessárias para concluir a compra
      // Por exemplo, salvar a compra no banco de dados, exibir uma mensagem de sucesso, etc.
      this.bdtempService.limparCarrinho(); // Limpar o carrinho após a conclusão da compra
      console.log('Compra concluída com sucesso.');
    } else {
      console.log('Não é possível concluir a compra, carrinho vazio.');
    }

}

}
