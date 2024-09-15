import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pendingbill',
  templateUrl: './pendingbill.page.html',
  styleUrls: ['./pendingbill.page.scss'],
})
export class PendingbillPage implements OnInit {
  items = [
    { title: 'Peding', description: 'Description for Item 1' },
    { title: 'Done', description: 'Description for Item 2' },
    // Add more items as needed
  ];
  constructor() { }

  ngOnInit() {
  }

}
