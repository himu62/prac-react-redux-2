import * as React from 'react';

interface Props {
	active: boolean;
	children: Node;
	onClick: Function;
}

export default class Link extends React.Component<Props, {}> {
	render() {
		if(this.props.active) {
			return (
				<span>{this.props.children}</span>
			);
		}

		return (
			<a
				href="#"
				onClick={e => {
					e.preventDefault();
					this.props.onClick();
				}}
			>
				{this.props.children}
			</a>
		);
	}
}
