import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTodo } from './todo.actions';
import { TodoSelectors } from './todo.selectors';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/todo-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 @Select(TodoSelectors.items)
 items$!: Observable<TodoModel[]>;

 @Select(TodoSelectors.doneItems)
 doneItems$!:Observable<TodoModel[]>;

 @Select(TodoSelectors.activeItems)
 activeItems$!:Observable<TodoModel[]>;

  title = 'to-do-list-angular-love';
  newTitle!: string;
  constructor(private store: Store) { }

  add() {
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = "";
  }
}
