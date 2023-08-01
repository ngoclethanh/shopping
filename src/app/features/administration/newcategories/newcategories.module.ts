import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewCategoryRoutingModule } from './newcategories-routing.module';
import { pages } from './pages';

@NgModule({
  declarations: [
  ...pages
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NewCategoryRoutingModule
  ]
})
export class NewcategoryModule { }
