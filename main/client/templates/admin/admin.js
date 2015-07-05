// https://github.com/mizzao/meteor-user-status
Template.admin.helpers({
  users: function() {
    return Meteor.users.find({});
  }
});

Template.userItem.helpers({
	seenFirst: function(){
		var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    	];
    	var date = this.createdAt
    	var day = date.getDate()
    	var monthIndex = date.getMonth()
    	var year = date.getFullYear()

    	return day+' '+monthNames[monthIndex]+' '+year
	},
	seenLast: function(){
		if(!this.hasOwnProperty('status'))
			return
		
		if(!this.status.hasOwnProperty('lastLogin'))
			return
		
		var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    	];
    	var date = this.status.lastLogin.date
    	var day = date.getDate()
    	var monthIndex = date.getMonth()
    	var year = date.getFullYear()

		return day+' '+monthNames[monthIndex]+' '+year
	},
	usedService: function(){
		if(!this.hasOwnProperty('services'))
			return

		if(this.services.hasOwnProperty('google'))
			return 'google'

		return 'moveme'
	}
})
