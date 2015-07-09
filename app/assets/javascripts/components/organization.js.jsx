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
      <OrganizationName name={this.state.name} meetupURL={this.meetupURL} />
      <OrganizationEvent event={this.state.next_event} meetupURL={this.meetupURL} />
      <OrganizationMembers members={this.state.members} meetupURL={this.meetupURL} />
    </div>;
  }
});

var OrganizationImage = React.createClass({
  render: function() {
    return <img src={this.props.photos.highres_link} width="80" height="80"/>;
  }
});

var OrganizationName = React.createClass({
  render: function() {
    return <h2><a href={this.urlForMeetup()}>
      {this.props.name}
    </a></h2>;
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
