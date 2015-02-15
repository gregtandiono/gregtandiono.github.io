var React       = require('react')
  , svgInjector = require('svg-injector');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='hero'>
        <div className='container'>
          <HeroContent />
        </div>
      </section>
    )
  }
});

var HeroContent = React.createClass({
  animateIntro: function() {
    var introText   = $('#intro')
      , introImage  = $('#intro-img');

    var introSequence = [
      { e: introText, p: { opacity: 1 }, o: { duration: 500 } },
      { e: introImage, p: { opacity: 1 }, o: { duration: 500 } }
    ];

    $.Velocity.RunSequence(introSequence);
  },
  componentDidMount: function() {
    svgInjector($('.svg-inject'));
    this.animateIntro();
  },
  render: function() {
    return (
      <div className='row'>
        <div id='intro' className='seven columns'>
          <h1 id='hero-title'>
            Developer, Designer, Writer, Musician, Gamer.
          </h1>
          <div className='horizontal-line-small' />
          <p>
            Hi, my name is Greg. I am a web developer currently living in
            Vancouver, BC. Javascript is my weapon of choice,
            and I specialize in Client-Side development.
          </p>
        </div>
        <div id='intro-img' className='five columns'>
          <img
            id='intro-animation'
            src='/images/intro.svg'
            className='svg-inject'
          />
        </div>
      </div>
    )
  }
});
