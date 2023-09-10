import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductService } from 'src/app/shared/data-access/product.service';

@Component({
  selector: 'app-searchbar',
  template: `<ion-searchbar></ion-searchbar>`,
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
})
export class SearchbarComponentModule {}
