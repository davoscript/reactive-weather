var React = require('react');

var backgroundUnit = {
	background: '#2E6FA6',
	color: '#ffffff',
}

var paddingUnit = {
	paddingRight: '10px'
}

var Units = React.createClass({

	tempClick: function(e) {
		this.props.changeTemp(e.target.innerHTML);
	},

	render: function() {
		return (
            <div className="btn-group" role="group">
                <button style={this.props.unit == 'metric' ? backgroundUnit: null} className="btn btn-default unit-c" onClick={this.tempClick}>°C</button>
                <button style={this.props.unit == 'imperial' ?backgroundUnit: null} className="btn btn-default unit-f" onClick={this.tempClick}>°F</button>
            </div>
			);
	}

});

module.exports = Units;
