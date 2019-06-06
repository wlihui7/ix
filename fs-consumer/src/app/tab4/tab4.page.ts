import { Component, OnInit } from '@angular/core';
import { Message, User } from '../models';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  messages: Array<Message> = new Array<Message>();

  constructor() {
    const user1: User = new User();
    user1.name = 'Leah Wang';
    const user2: User = new User();
    user2.name = 'Anina Ku';
    const message1 = new Message(user2, user1, "I'm hungry");
    const message2 = new Message(user1, user2, "Cool");

    this.messages.push(message1, message2);
   }

  ngOnInit() {
  }
}
