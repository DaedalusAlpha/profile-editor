import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Profile Editor';
  displayEdit: boolean = false;
  user1: User = {
    name: 'Matt',
    age: 40,
    favoriteColor: 'blue',
    happy: true,
    favoriteFood: 'pizza',
  };

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
  }
}
