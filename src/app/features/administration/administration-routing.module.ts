import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then((m) => m.ClassesModule),
  },

  {
    path: 'newcategory',
    loadChildren: () => import('./newcategories/newcategories.module').then((m) => m.NewcategoryModule),
  },
  {
    path: 'new',
    loadChildren: () => import('./news/news.module').then((m) => m.NewsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
