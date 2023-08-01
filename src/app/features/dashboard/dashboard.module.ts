import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { components } from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { pages } from './pages';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [DashboardRoutingModule, SharedModule],
  declarations: [...pages, ...components],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class DashboardModule {}
