import * as React from 'react';

interface Props {
	onClick: Function;
	completed: boolean;
	text: string;
}

export default class Todo extends React.Component<Props, {}> {
	render() {
		return (
			<li
				onClick={this.props.onClick}
				style={{
					textDecoration: this.props.completed ? 'line-through' : 'none'
				}}
			>
				{this.props.text}
			</li>
		);
	}
}
