import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { TodoStateModel } from "src/todo-state.model";

@State<TodoStateModel>({
    name:"todo",
    defaults:{
        items:[]
    },
})
@Injectable()
export class TodoState{}