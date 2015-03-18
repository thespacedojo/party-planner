Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('myEvents', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('myEvents');
    }
  }),
  this.route('eventShow', {
    path: '/events/:_id',
    name: 'event.show',
    waitOn: function() {
      return Meteor.subscribe('event', this.params._id);
    },
    data: function() {
      return {
        event: Events.findOne({_id: this.params._id})
      };
    }
  });
});
