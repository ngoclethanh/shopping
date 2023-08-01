import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./features/features.module').then((m) => m.FeaturesModule),
    //canActivate: [GuardService],
  },
  // {
  //   path: 'page',
  //   loadChildren: () => import('./my-page/my-page.module').then((m) => m.MyPageModule),
  // },
  // {
  //   path: 'login',
  //   component:LoginComponent
  // },
  { path: '', redirectTo: 'page/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'page/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
