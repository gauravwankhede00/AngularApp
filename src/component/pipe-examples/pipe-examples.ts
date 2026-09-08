import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  imports: [CommonModule],
  templateUrl: './pipe-examples.html',
  styleUrl: './pipe-examples.css',
})
export class PipeExamples {

  messages: string[] = ['Hello', 'World', 'From Angular'];
  messageMapping = {
    '=0': 'No messages.',
    '=1': 'One message.',
    'other': '# messages.'
  };


  gender = 'female';

  inviteMap = {
    'male': 'Invite him.',
    'female': 'Invite her.',
    'other': 'Invite them.'
  };

  changeToZeroMessages() {
    this.messages = [];
  }

  changeToOneMessage() {
    this.messages = ['Single'];
  }

  changeToManyMessages() {
    this.messages = ['One', 'Two', 'Three', 'Four'];
  }

  changeGenderToMale() {
    this.gender = 'male';
  }

  changeGenderToFemale() {
    this.gender = 'female';
  }

  changeGenderToOther() {
    this.gender = 'other';
  }
}
