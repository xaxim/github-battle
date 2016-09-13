var React = require('react');
var ChildComponent = require('./ChildComponent');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

const ParentComponent = React.createClass({
	getDefaultProps: function () {
		console.log('ParentComponent - getDefaultProps');
	},
	getInitialState: function () {
		console.log('ParentComponent - getInitialState');
		return { text: '' };
	},
	componentWillMount: function () {
		console.log('ParentComponent - componentWillMount');
	},
	render: function () {
		console.log('ParentComponent - render');
		return (
			<div className="jumbotron col-sm-12 text-center" style={transparentBg}>
				<h1>Lifecycle Events Console Test</h1>
				<p className='lead'>Hakuna Matata</p>
				<input
					value={this.state.text}
					onChange={this.onInputChange} />
				<ChildComponent text={this.state.text} />
				<hr />
				<Link to='/'>
					<button type='button' className='btn btn-lg btn-success'>Inicio</button>
				</Link>
			</div>
		);
	},
	componentDidMount: function () {
		console.log('ParentComponent - componentDidMount');
	},
	componentWillUnmount: function () {
		console.log('ParentComponent - componentWillUnmount');
	},
	onInputChange: function (e) {
		this.setState({ text: e.target.value });
	}
});

module.exports = ParentComponent;