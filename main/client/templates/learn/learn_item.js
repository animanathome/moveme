Template.learnItem.helpers({
  submittedText: function() {
    // return this.submitted.toString();

    var time = this.submitted.getHours();
    time += ":"
    time += this.submitted.getMinutes();
    time += " "
    time += this.submitted.getDate();
    time += "/"
    time += this.submitted.getMonth();
    time += "/"
    time += this.submitted.getFullYear();
    return time;
  }
})