import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  template: `Cart Page`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPage {}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartPage,
      },
    ]),
  ],
  declarations: [CartPage],
  exports: [CartPage],
})
export class CartPageModule {}
