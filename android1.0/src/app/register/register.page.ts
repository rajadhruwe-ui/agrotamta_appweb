import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formData = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private navCtrl: NavController) { }

  register() {
    // Implement registration logic here, e.g., send data to a server
    console.log('Registration data:', this.formData);

    // Navigate to another page after successful registration
    this.navCtrl.navigateForward('/home');
  }

  ngOnInit() {
  }

}
