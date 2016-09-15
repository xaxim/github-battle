var React = require('react');
var PropTypes = React.PropTypes;

styles = {
    container: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        fontSize: '55px'
    },
    content: {
        textAlign: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: '30px'
    }
}

var Loading = React.createClass({
    propTypes: {
        text: PropTypes.string,
        speed: PropTypes.number,
        dots: PropTypes.number
    },
    getDefaultProps(){
        return {
            text: 'Loading',
            speed: 300,
            dots: 3
        }
    },
    getInitialState() {
        this.originalText = this.props.text;
        return {
            text: this.originalText
        }
    },
    componentDidMount(){
        var dots = '';
        for(var i = 0; i < this.props.dots; i++){
            dots = dots + '.';
        }
        var stopper = this.originalText + dots;
        this.interval = setInterval(function(){
            if(this.state.text === stopper){
                this.setState({
                    text : this.originalText
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }.bind(this), this.props.speed)
    },
    componentWillUnmount(){
        clearInterval(this.interval);
    },
    render() {
        return (
            <div style={styles.container} >
                <p style={styles.content}>{this.state.text}</p>
            </div>
        );
    }
});

module.exports = Loading;