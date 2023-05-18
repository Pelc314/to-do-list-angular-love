import { Component, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AddTodo } from './todo.actions';
import { TodoSelectors } from './todo.selectors';
import { Observable, Subject } from 'rxjs';
import { debounceTime, take, takeUntil } from 'rxjs/operators';
import { TodoModel } from 'src/todo-state.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'to-do-list-angular-love';
  newTitle: string = "";
 
  @Select(TodoSelectors.items)
  items$!: Observable<TodoModel[]>;

  @Select(TodoSelectors.doneItems)
  doneItems$!: Observable<TodoModel[]>;

  @Select(TodoSelectors.activeItems)
  activeItems$!: Observable<TodoModel[]>;

  dectructor: Subject<boolean> = new Subject<boolean>();
  todoControl = new FormControl("Text");
 
  constructor(private store: Store) {
    this.todoControl.valueChanges.pipe(debounceTime(500), takeUntil(this.dectructor)).subscribe(text => {
      console.log(text);
    })
  }

  ngOnDestroy(): void {
    this.dectructor.next(true)
  }

  add(event: Event) {
    event.preventDefault();
    console.log(this.newTitle)
    this.store.dispatch(new AddTodo(this.newTitle));
    this.newTitle = "";
  }
}
