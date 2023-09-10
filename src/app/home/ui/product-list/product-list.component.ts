import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ProductService } from 'src/app/shared/data-access/product.service';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="card-container">
      <ng-container *ngFor="let product of products$ | async as products">
        <ion-card button>
          <ion-img src="{{ product.imageUrl }}" />
          <ion-card-header>
            <ion-card-title>{{ product.productName }}</ion-card-title>
            <ion-card-subtitle>{{
              product.price | currency
            }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content> {{ product.description }} </ion-card-content>
        </ion-card>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        max-width: 1400px;
      }

      ion-card {
        max-width: 300px;
      }

      ion-card-content {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `,
  ],
})
export class ProductListComponent {
  @Input() products$!: Observable<Product[]>;

  constructor() {}
}

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
})
export class ProductListComponentModule {}
