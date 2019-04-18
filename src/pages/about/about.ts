import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  photo: string = '';

  constructor(public navCtrl: NavController,private camera: Camera
  ) {

  }


  takePicture() {
    this.photo = '';

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }


    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;

        console.log("this.photo " + this.photo);


      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })


  }






}
