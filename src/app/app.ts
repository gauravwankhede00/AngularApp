import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../core/model/user';
import { UserType } from '../shared/directive/user-type';
import { HasPermission } from '../shared/directive/has-permission';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserType, HasPermission],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularApp New');
  currentUser : User ={
    email: '',
    id: 0,
    name: 'John Doe',
    role: 'owner',
    userType:  'Gold'
  };
  
}
