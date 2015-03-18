Meteor.methods({
  sendEmail: function (to, id) {
    console.log(id);
    this.unblock();
    var emailEvent = Events.findOne({_id: id});
    var subject = "Your invited to " + emailEvent.name;
    var text = "Please join us for an upcoming event: " + emailEvent.name;

    Email.send({
      to: to,
      from: "appOwner@domain.com",
      subject: subject,
      text: text
    });
  }
});
