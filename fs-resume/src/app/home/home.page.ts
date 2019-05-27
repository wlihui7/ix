import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public myBirth = '';

  ionViewDidEnter() {
    this.myBirth = '2000-06-14';
  }

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: 'You good?',
      buttons: ['Not at all', 'Good']
    });

    alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Have a Drink!',
      message: 'Click to Clink',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'wine',
          text: 'Cheers',
          handler: () => {
            console.log('Toast completed!');
          }
        }, {
          text: 'Nah',
          role: 'cancel',
          handler: () => {
            console.log('No toast');
          }
        }
      ]
    });
    toast.present();
  }
}

