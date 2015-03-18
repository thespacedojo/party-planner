Template.eventShow.events({
  "submit form": function(event, template) {
    event.preventDefault();
    email = template.$("#emailAddress").val();
    eventId = template.data.event._id;
    Events.update(template.data.event._id, {$push: {emails: email}}, function(error, id) {
      template.$('#emailAddress').val(null);
      Meteor.call("sendEmail", email, eventId);
    });
  }
});
