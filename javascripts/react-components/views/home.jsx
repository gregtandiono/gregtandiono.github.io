var React    = require('react')
  , velocity = require('velocity-animate')
  , _        = require('underscore');

var Home = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <h1>Hello, world</h1>
      </div>
    )
  }
});

var Hero = React.createClass({
  render: function() {
    return (
      <div className='hero'>
      </div>
    )
  }
});

React.render(<Home />, document.getElementById('app'))
