var React = require('react')
  , _     = require('underscore');

module.exports = React.createClass({
  render: function() {
    return (
      <header>
        <div className='container'>
          <div className='u-pull-left logo'>
            <a href='/'>
              <img src='/images/logo.svg' />
            </a>
          </div>
          <Navigation />
        </div>
      </header>
    )
  }
});

var Navigation = React.createClass({
  render: function() {
    var navigationLinks = [{
      name: 'code & thoughts',
      url: '/blog'
    }, {
      name: 'let\'s collaborate',
      url: 'mailto:gregtandiono@gmail.com?Subject=Work%20Together'
    }];

    var socialMediaLinks = [{
      iconClass: 'ion-social-twitter',
      url: 'https://twitter.com/whuxleyvan'
    }, {
      iconClass: 'ion-social-octocat',
      url: 'https://github.com/gregtandiono'
    }, {
      iconClass: 'ion-steam',
      url: 'http://steamcommunity.com/profiles/76561198113396268/'
    }];

    var navigationList = [];
    var socialMediaList = [];

    _.each(navigationLinks, function(item, index) {
      navigationList.push(
        <li key={index}>
          <a href={item.url}>{item.name}</a>
        </li>
      )
    });

    _.each(socialMediaLinks, function(item, index) {
      socialMediaList.push(
        <li key={index}>
          <a href={item.url} target='_blank'>
            <i className={item.iconClass} />
          </a>
        </li>
      )
    });

    return (
      <nav>
        <ul className='main-navigation'>
          {navigationList}
        </ul>
        <div className='separator' />
        <ul className='social-media'>
          {socialMediaList}
        </ul>
      </nav>
    )
  }
})
