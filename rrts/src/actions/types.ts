import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
