import { Component, signal } from '@angular/core';
import { HeaderComponent} from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports :[HeaderComponent]
})
export class App {
  //protected readonly title = signal('angular-BankingAPI');
  title='New Project';
}
