import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTodo } from './todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list-angular-love';
  newTitle!: string;
  constructor(private store: Store) { }

  add() {
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = "";
  }
}
