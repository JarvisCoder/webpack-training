var React = require('react');
var ReactDOM = require('react-dom');

class Timer extends React.Component {

	constructor () {
		super();
		this.state = {
			secondsElapsed: 0
		};
	}

	componentDidMount () {
		this.interval = setInterval(() => {this.setState({secondsElapsed: this.state.secondsElapsed + 1})}, 1000);
	}

	componentWillMount () {
		clearInterval(this.interval);
	}

	render () {
		return (
			<div><h3>It's the final countdown</h3>Seconds Elapsed: {this.state.secondsElapsed}</div>
		);
	}

};

ReactDOM.render(<Timer />, document.getElementById('container'));