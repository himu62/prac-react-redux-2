import * as React from 'react';
import Todo from './Todo';

interface Props {
	todos: Array<{
		id: number;
		completed: boolean;
		text: string;
	}>;
	onTodoClick: Function;
}

export default class TodoList extends React.Component<Props, {}> {
	render() {
		return (
			<ul>
				{this.props.todos.map(todo =>
					<Todo
						key={todo.id}
						{...todo}
						onClick={() => this.props.onTodoClick(todo.id)}
					/>
				)}
			</ul>
		);
	}
}
