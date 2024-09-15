import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private alertController: AlertController, private router: Router) { }
 

  ngOnInit() {
    
  } 

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login successfull',
      buttons: ['OK'],
    });
  
    await alert.present();
  }


  login() {
   
    // Replace this with your actual authentication logic
    // For example, you might use Firebase Authentication or an API call here
    if (this.username === 'anil' && this.password === '123456') {
      // Authentication successful
      alert("Login successfully");
      this.router.navigate(['/tabs/home']); // Navigate to the dashboard or the desired page
    } else {
      // Authentication failed
      console.log('Invalid credentials');
      // You can display an error message to the user here
    }
  }
  }




