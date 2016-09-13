var React = require('react');

const ChildComponent = React.createClass({
	getDefaultProps: function () {
		console.log('ChildComponent - getDefaultProps');
	},
	getInitialState: function () {
		console.log('ChildComponent - getInitialState');
		return { dummy: '' };
	},
	componentWillMount: function () {
		console.log('ChildComponent - componentWillMount');
	},
	componentDidMount: function () {
		console.log('ChildComponent - componentDidMount');
	},
	componentWillUnmount: function () {
		console.log('ChildComponent - componentWillUnmount');
	},
	componentWillReceiveProps: function (nextProps) {
		console.log('ChildComponent - componentWillReceiveProps');
		console.log(nextProps);
	},
	shouldComponentUpdate: function (nextProps, nextState) {
		console.log('ChildComponent - shouldComponentUpdate');
		return true;
	},
	componentWillUpdate: function (nextProps, nextState) {
		console.log('ChildComponent - componentWillUpdate');
		console.log('nextProps:');
		console.log(nextProps);
		console.log('nextState:');
		console.log(nextState);
	},
	render: function () {
		console.log('ChildComponent - render');
		return (
			<div>Props: {this.props.text}</div>
		);
	},
	componentDidUpdate: function (previousProps, previousState) {
		console.log('ChildComponent - componentDidUpdate');
		console.log('previousProps:');
		console.log(previousProps);
		console.log('previousState:');
		console.log(previousState);
	}
});

module.exports = ChildComponent;