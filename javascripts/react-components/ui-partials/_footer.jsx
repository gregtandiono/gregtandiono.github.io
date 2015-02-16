var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <footer>
        <div className='container'>
          <p className='text-align-center center-element'>
            This website is licensed under WTFPL (Do What The Fuck You Want To Public License)
            <br />
            Colophon: This website was built using ReactJs, Browserify, Grunt, Less, SkeletonCSS, Ionicons, VelocityJs, Marked, Markdown, Bower, VIM, and hosted by Github.
            <br />
            Designed & Developed by Gregory Tandiono
          </p>
        </div>
      </footer>
    )
  }
});
