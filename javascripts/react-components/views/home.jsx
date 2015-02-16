var React       = require('react')
  , svgInjector = require('svg-injector')
  , _           = require('underscore');


/*
 ** Load UI Partials
 */

var Header = require('../ui-partials/_header.jsx')
  , Hero   = require('../ui-partials/_hero.jsx');


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Hero />
        <main className='container'>
          <Biography />
        </main>
      </div>
    )
  }
});

var Biography = React.createClass({
  componentDidMount: function() {
    $('#skills').velocity(
      {opacity: 1, translateY: '-15px'},
      {delay: 1500}
    )
  },
  render: function() {
    return (
      <section id='skills'>
        <img id='me' src='/images/me.svg' className='center-element' />
        <h2 className='text-align-center'>What I do.</h2>
      </section>
    )
  }
});

React.render(<Home />, document.getElementById('app'))
