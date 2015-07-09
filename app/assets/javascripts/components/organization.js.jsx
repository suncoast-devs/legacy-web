/* global React, $ */

var Organization = React.createClass({
  componentWillMount: function() {
    $.getJSON('/meetup/group/' + this.props.meetup_id).then(function(json) {
      this.setState(json);
    }.bind(this));

    this.setState({
      name: this.props.name,
      group_photo: {},
      next_event: {},
      members: "?"
    });
  },

  meetupURL: function(path) {
    return "http://www.meetup.com/" + this.props.meetup_id + path;
  },

  render: function() {
    return <div>
      <OrganizationImage photos={this.state.group_photo} />
      <div className="content">
        <OrganizationName name={this.state.name} meetupURL={this.meetupURL} />
        <div className="description">
          <OrganizationEvent event={this.state.next_event} meetupURL={this.meetupURL} />
          <OrganizationMembers members={this.state.members} meetupURL={this.meetupURL} />
        </div>
      </div>
    </div>;
  }
});

var OrganizationImage = React.createClass({
  render: function() {
    return <div className="ui image">
      <img src={this.props.photos.highres_link} width="80" height="80"/>
    </div>;
  }
});

var OrganizationName = React.createClass({
  render: function() {
    return <a href={this.urlForMeetup()} className="header">
      {this.props.name}
    </a>;
  },

  urlForMeetup: function() {
    return this.props.meetupURL('/');
  }
});

var OrganizationMembers = React.createClass({
  render: function() {
    return <a className="property" href={this.urlForMembers()}>
      <strong>Members:</strong> {this.props.members}
    </a>;
  },

  urlForMembers: function() {
    return this.props.meetupURL('/members');
  }
});

var OrganizationEvent = React.createClass({
  render: function() {
    if (this.props.event.name == void(0) ) {
      return <span className="property"><strong>Next Event:</strong> <em>No event scheduled</em></span>;
    } else {
      return <a className="property" href={this.urlForEvent()}>
        <strong>Next Event:</strong> {this.props.event.name}
      </a>;
    }
  },

  urlForEvent: function() {
    return this.props.meetupURL("/events/" + this.props.event.id);
  }
});
