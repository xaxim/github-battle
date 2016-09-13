var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');

function Home () {
	return (
		<MainContainer>
			<h1>Github Battle</h1>
			<p className='lead'>May the odds be in your favor</p>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-success'>Get Started</button>
			</Link>
			<hr />
			<Link to='/parent'>
				<button type='button' className='btn btn-lg btn-success'>Lifecycle Events Console Test</button>
			</Link>			
		</MainContainer>
	);
}

module.exports = Home;