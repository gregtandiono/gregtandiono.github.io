var React = require('react')
  , _     = require('underscore');

var Home = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <h1>Hello, world</h1>
      </div>
    )
  }
});

React.render(<Home />, document.getElementById('app'))