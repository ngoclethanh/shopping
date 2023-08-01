import { BaseComponent } from './base.component';
import { LoadingComponent } from './loading/loading.component';
import { ConfirmDialogComponent } from './confirm/confirm.component';
import { ErrorComponent } from './f-errors/f-errors.component';

export const components: any[] = [
  BaseComponent,
  LoadingComponent,
  ConfirmDialogComponent,
  ErrorComponent,
];

export * from './base.component';
export * from './loading/loading.component';
export * from './confirm/confirm.component';
export * from './f-errors/f-errors.component';
