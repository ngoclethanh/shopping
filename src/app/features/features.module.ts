import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  imports: [FeaturesRoutingModule, SharedModule],
  declarations: [FeaturesComponent],
})
export class FeaturesModule {}
