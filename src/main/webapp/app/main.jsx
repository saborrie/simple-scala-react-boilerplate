var React = require('react');
var ReactDOM = require('react-dom');

var Ajax = require('simple-ajax');

var App = React.createClass({
    getInitialState: function() {
        return {
            ping: ''
        };
    },
    componentDidMount: function() {
        var that = this;

        var ajax = new Ajax({
            url: '/api/ping',
            method: 'GET'
        });

        ajax.on('success', function(event) {
            that.setState({
                ping: event.target.response
            });
        });

        ajax.send();
    },
    render: function() {
        return (
            <div>
                <h1>
                    Hello World
                </h1>
                <p>
                    {this.state.ping}
                </p>
            </div>
        );
    },
});

ReactDOM.render(<App/>, document.getElementById('content'));