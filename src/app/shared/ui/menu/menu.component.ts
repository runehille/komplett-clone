import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  template: `<ion-menu side="start">hello</ion-menu> `,
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuComponentModule {}
