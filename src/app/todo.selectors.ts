import { TodoStateModel } from "src/todo-state.model";
import { TodoState } from "./todo.state";
import { Selector } from "@ngxs/store";

export class TodoSelectors {
    @Selector([TodoState])
    static items(state: TodoStateModel) {
        return state.items;
    }

    @Selector([TodoState])
    static doneItems(state: TodoStateModel) {
        return state.items.filter((it) => !it.isActive);
    }

    @Selector([TodoState])
    static activeItems(state: TodoStateModel) {
        return state.items.filter((it) => it.isActive);
    }
}