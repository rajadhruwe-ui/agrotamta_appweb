import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userName = 'Anil Wasisth';
  userDescription = 'Full stack Developer';
  // profile
  userEmail: string = 'anilwasisth@gamil.com';
  sesstion : string = '2022-24';

  constructor() { }
  updateProfile() {
    // Implement the logic to update the user's profile here
    // You can send data to a server, update a database, etc.
    console.log('Profile updated');
  }
  ngOnInit() {
  }

}
