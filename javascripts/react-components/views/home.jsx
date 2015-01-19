var React       = require('react')
  , svgInjector = require('svg-injector')
  , _           = require('underscore');

var Home = React.createClass({
  render: function() {
    return (
      <section className='hero' id='home'>
        <div className='container'>
          <AnimatedObj />
        </div>
      </section>
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

var AnimatedObj = React.createClass({
  clickHandler: function() {
    var mainObj = $('#animated-obj')
      , bottomBox = $('g#bottom')
      , middleBox = $('g#middle');

    var animationSequence = [
      { e: mainObj, p: { translateY: '60px' } },
      { e: mainObj, p: { translateX: '60px' } },
      { e: bottomBox, p: { translateY: '80px' } }
    ];

    $.Velocity.RunSequence(animationSequence);
  },
  componentDidMount: function() {
    svgInjector($('.svg-inject'));
  },
  render: function() {
    return (
      <img
        src='/images/boxes.svg'
        onClick={this.clickHandler}
        id='animated-obj'
        ref='fucking'
        className='svg-inject'
      />
    )
  }
});

React.render(<Home />, document.getElementById('app'))
