import { TodoModel } from "src/todo-state.model";

export class AddTodo {
    static readonly type = "[Todo] Add todo";
    constructor(public title: string) { }
}

export class ChangeStatus {
    static readonly type = "[Todo] Change status";
    constructor(public todoItem: TodoModel, public status: boolean) { }
}