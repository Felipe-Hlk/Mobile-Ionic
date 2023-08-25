import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'carros',
    loadChildren: () => import('./carros/carros.module').then( m => m.CarrosPageModule)
  },
  {
    path: 'caminhoes',
    loadChildren: () => import('./caminhoes/caminhoes.module').then( m => m.CaminhoesPageModule)
  },
  {
    path: 'barcos',
    loadChildren: () => import('./barcos/barcos.module').then( m => m.BarcosPageModule)
  },
  {
    path: 'avioes',
    loadChildren: () => import('./avioes/avioes.module').then( m => m.AvioesPageModule)
  },
  {
    path: 'promocoes',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
