import React, { Component } from 'react';

class Dialog extends Component {
	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		var len = this.props.nums;
		var newid = len > 0 ? len : 0;
		var value = this.refs.myText.value;
		if (value !== '') {
			var obj = {
				id: newid,
				name: value,
				status: 0
			};
			this.refs.myText.value = '';
			this.props.addNewTask(obj);
		}
	}

	render () {
		return (
			<div className="dialog">
				<div className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="text" ref="myText" placeholder="添加待办任务"/>
					<input className="btn btn-outline-info my-2 my-sm-0" type="button" value="保存任务" onClick={this.handleClick}/>
				</div>
			</div>

		);
	}
}

export default Dialog;
