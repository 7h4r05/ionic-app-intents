import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-button (click)="dismiss()">Dismiss</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>You selected table: {{ table }}</h1>
    </ion-content>
  `,
})
export class ModalComponent {
  @Input() table: string | null = null;
  constructor(private modalController: ModalController) {}

  async dismiss() {
    await this.modalController.dismiss();
  }
}
