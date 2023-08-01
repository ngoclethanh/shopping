import { NgModule } from '@angular/core';
import { pages } from './pages';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';




@NgModule({
  declarations: [
    ...pages
  ],
  imports: [
    SharedModule,
    CategoryRoutingModule
  ]
})
export class ClassesModule { }
