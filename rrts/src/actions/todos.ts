import axios from 'axios';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ActionTypes } from './types';
import { StoreState } from '../reducers';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = (): ThunkAction<Promise<void>, StoreState, null, FetchTodosAction> => {
  return async (dispatch: Dispatch<FetchTodosAction>): Promise<void> => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
