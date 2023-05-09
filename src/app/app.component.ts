import { Component } from '@angular/core';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

export class Table {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tables = [
    new Table(1, 'For 2'),
    new Table(2, 'Family table'),
    new Table(3, 'Outdoor table'),
  ];

  constructor(private modalController: ModalController) {
    this.initializeApp();
  }
  initializeApp() {
    App.addListener('appUrlOpen', async (event: URLOpenListenerEvent) => {
      let slug = event.url.split('intentsexample://').pop();
      if (slug && slug.startsWith('open-modal')) {
        slug = slug.split('/').pop();
        const tableId = slug ? +slug : null;
        if (
          tableId &&
          !isNaN(tableId) &&
          this.tables.some((t) => t.id === tableId)
        ) {
          const modal = await this.modalController.create({
            component: ModalComponent,
            componentProps: {
              table: this.tables.find((t) => t.id === tableId)?.name,
            },
          });
          await modal.present();
        }
      }
    });
  }
}
