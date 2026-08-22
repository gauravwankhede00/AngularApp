import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../core/model/user';
import { UserType } from '../shared/user-type';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserType],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp New');
  currentUser : User ={
    email: '',
    id: 0,
    name: '',
    role: '',
    userType:  'Bronze'
  };
  
}
