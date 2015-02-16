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
          <AboutMe />
        </main>
      </div>
    )
  }
});

var AboutMe = React.createClass({
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
        <SkillSet />
      </section>
    )
  }
});

var skills = [{
  type: 'Server-Side Development',
  list: [
    'Node/io',
    'ExpressJs',
    'Socket IO',
    'Firebase',
    'Ruby on Rails',
    'Sinatra',
    'Revel (Golang)',
    'Postgres'
  ]
}, {
  type: 'Client-Side Development',
  list: [
    'React',
    'Flux',
    'Angular',
    'CommonJs (Browserify, RequireJs)',
    'Grunt',
    'Bower',
    'VelocityJs (for animation)',
    'Less/Stylus/Sass',
    'CSS framework agnostic'
  ]
}, {
  type: 'Preferred Tools',
  list: [
    'Jasmine',
    'Jest (Jasmine wrapper for react tests)',
    'Travis CI',
    'Wercker CI',
    'Capistrano for deployment',
    'AWS (EC2, S3, RDS)',
    'Ansible',
    'I love ZSH',
    'Git for version Control',
    'I love VIM'
  ]
}, {
  type: 'Design',
  list: [
    'Photoshop',
    'Illustrator',
    'Sketch 3'
  ]
}];

var SkillSet = React.createClass({
  render: function() {
    var skillListing = [];
    _.each(skills, function(skill, index) {
      var skillList = [];
      _.map(skill.list, function(item) {
        skillList.push(
          <li>{item}</li>
        )
      });
      skillListing.push(
        <div className='u-full-width'>
          <h3>{skill.type}</h3>
          <ul className='skill-listing'>
            {skillList}
          </ul>
        </div>
      )
    });
    return (
      <div className='rows'>
        {skillListing}
      </div>
    )
  }
});

React.render(<Home />, document.getElementById('app'));
