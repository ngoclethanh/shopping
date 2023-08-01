import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { pages } from './page';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [...pages],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, NewsRoutingModule],
})
export class NewsModule {}
