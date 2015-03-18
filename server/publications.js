Meteor.publish('myEvents', function() {
  if (! this.userId) {
    return [];
  } else {
    return Events.find({userId: this.userId});
  }
});

Meteor.publish('event', function(id) {
  return Events.find({_id: id});
});
