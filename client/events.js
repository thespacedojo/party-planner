Template.myEvents.helpers({
  myEvents: function() {
    return Events.find();
  }
});

Template.myEvents.events({
  'submit form': function(event, template) {
    event.preventDefault();
    eventName = template.$('#eventName').val();
    if (Meteor.user()) {
      Events.insert({name: eventName}, function(error, id) {
        if (id) {
          template.$('#eventName').val(null);
          CoffeeAlerts.success("Your event has been added.");
        } else {
          CoffeeAlerts.warning("There was an error saving your event.");
        }
      });
    } else {
      CoffeeAlerts.error("Please login to save events.");
    }
  }
});
