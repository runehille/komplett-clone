import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  RouteReuseStrategy,
  RouterModule,
} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { MenuComponentModule } from 'src/app/shared/ui/menu/menu.component';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-menu side="end" contentId="main-content">
        <app-menu></app-menu>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-app>
  `,
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    MenuComponentModule,
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: 'home',
          loadChildren: () =>
            import('./home/home.page').then((m) => m.HomePageModule),
        },
        {
          path: 'cart',
          loadChildren: () =>
            import('./cart/cart.page').then((m) => m.CartPageModule),
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
      ],
      { preloadingStrategy: PreloadAllModules }
    ),
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
