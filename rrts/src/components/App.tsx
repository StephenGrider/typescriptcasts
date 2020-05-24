import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Todo, Action, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): void;
  deleteTodo(id: number): void;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, null, Action>): {
  fetchTodos(): void;
  deleteTodo(id: number): void;
} => ({
  fetchTodos(): void {
    dispatch(fetchTodos());
  },
  deleteTodo(id: number): void {
    dispatch(deleteTodo(id));
  }
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(_App);
