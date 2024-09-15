import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, User1Component,User2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myservice';
}
