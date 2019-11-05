import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'products',
  children:[
    {
      path: '',
      loadChildren: './products/products.module#ProductsPageModule'
    },
    {
      path: ':productname',
      loadChildren: './product-details/product-details.module#ProductDetailsPageModule'
    }
  ]
  },
  { path: 'add-item', loadChildren: './add-item/add-item.module#AddItemPageModule' }
];
//   loadChildren: './products/products.module#ProductsPageModule' },
//   { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
