Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.map(function() {
  this.route('myEvents', {
    path: '/'
  }),
  this.route('eventShow', {
    path: '/events/:_id',
    name: 'event.show',
    data: function() {
      return {
        event: Events.findOne({_id: this.params._id})
      };
    }
  })
});
