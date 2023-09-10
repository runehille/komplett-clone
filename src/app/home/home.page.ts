import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponentModule } from 'src/app/home/ui/product-list/product-list.component';
import { SearchbarComponentModule } from 'src/app/shared/ui/searchbar/searchbar.component';
import { ProductService } from 'src/app/shared/data-access/product.service';
import {
  BehaviorSubject,
  Observable,
  debounce,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <ion-item class="top-text" lines="none">
        <ion-label>
          <ion-icon name="checkmark-outline"></ion-icon>
          <small> FRI FRAKT* </small>
        </ion-label>
        <ion-label>
          <ion-icon name="checkmark-outline"></ion-icon>
          <small> PRISMATCH </small>
        </ion-label>
        <ion-label>
          <ion-icon name="checkmark-outline"></ion-icon>
          <small> ÅPENT KJØP* </small>
        </ion-label>
      </ion-item>
      <ion-img src="assets/komplett_logo.svg" />
      <ion-searchbar
        placeholder="Søk blant våre produkter"
        [value]="search"
        (ionInput)="handleSearchInput($event)"
      ></ion-searchbar>
      <app-product-list [products$]="this.products$"> </app-product-list>

      <ion-modal [isOpen]="isCartModalOpen">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Modal</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="setOpen(false)">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              illum quidem recusandae ducimus quos reprehenderit. Veniam,
              molestias quos, dolorum consequuntur nisi deserunt omnis id illo
              sit cum qui. Eaque, dicta.
            </p>
          </ion-content>
        </ng-template>
      </ion-modal>
    </ion-content>

    <ion-footer>
      <ion-toolbar color="primary">
        <ion-buttons>
          <ion-menu-toggle>
            <ion-tab-button>
              <ion-icon name="menu"></ion-icon>
              Produkter
            </ion-tab-button>
          </ion-menu-toggle>
          <ion-tab-button>
            <ion-icon name="search" (click)="scrollToTop()"></ion-icon>
            Søk
          </ion-tab-button>
          <ion-tab-button>
            <ion-icon name="person-outline"></ion-icon>
            Rune
          </ion-tab-button>
          <ion-tab-button>
            <ion-icon name="gift"></ion-icon>
            Fordeler
          </ion-tab-button>
          <ion-tab-button (click)="setOpen(true)">
            <ion-icon name="cart"></ion-icon>
            Handlevogn
          </ion-tab-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [
    `
      ion-searchbar {
        border: 2px solid var(--ion-color-primary);
        padding: 0;
        margin-right: 1rem;
        box-shadow: none !important;
      }

      ion-tab-button {
        --background: var(--ion-color-primary);
      }

      ion-img {
        height: 50px;
      }

      ion-item.top-text {
        margin: 0;
        height: 2rem;
        --background: var(--ion-color-light);
      }

      ion-label {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  products$!: Observable<Product[]>;
  search: string = '';

  isCartModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isCartModalOpen = isOpen;
  }

  @ViewChild(IonContent) ionContent!: IonContent;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts(this.search);
  }

  handleSearchInput(event: any) {
    this.search = event.target.value;
    this.products$ = this.productService.getProducts(this.search);
  }

  scrollToTop() {
    this.ionContent.scrollToTop(300);
  }
}

@NgModule({
  imports: [
    IonicModule,
    ProductListComponentModule,
    SearchbarComponentModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
