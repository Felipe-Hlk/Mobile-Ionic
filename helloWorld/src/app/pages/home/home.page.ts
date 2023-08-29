import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos = [
    {
      nome: 'Produto 1',
      categoria: 'Eletrônicos',
      descricao: 'Descrição do Produto 1.',
      imagem: 'caminho/para/imagem1.jpg'
    },
    {
      nome: 'Produto 2',
      categoria: 'Vestuário',
      descricao: 'Descrição do Produto 2.',
      imagem: 'caminho/para/imagem2.jpg'
    },
    {
      nome: 'Produto 3',
      categoria: 'Esporte',
      descricao: 'Descrição do Produto 2.',
      imagem: 'caminho/para/imagem2.jpg'
    },
    {
      nome: 'Produto 4',
      categoria: 'Eletrodoméstico',
      descricao: 'Descrição do Produto 2.',
      imagem: 'caminho/para/imagem2.jpg'
    },
    {
      nome: 'Produto 5',
      categoria: 'Eletrodoméstico',
      descricao: 'Descrição do Produto 2.',
      imagem: 'caminho/para/imagem2.jpg'
    },
    {
      nome: 'Produto 6',
      categoria: 'Eletrodoméstico',
      descricao: 'Descrição do Produto 2.',
      imagem: 'caminho/para/imagem2.jpg'
    },
    {
      nome: 'Produto 7',
      categoria: 'Eletrodoméstico',
      descricao: 'Descrição do Produto 2.',
      imagem: 'caminho/para/imagem2.jpg'
    },
  ];

  constructor() {}

}
