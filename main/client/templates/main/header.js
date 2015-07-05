Template.header.helpers({
    activeRouteClass: function(){
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();

        var active = _.any(args, function(name) {
            //  bestSuggest = suggest
            //  suggest = suggest
            if( Router.current().route.getName().toLowerCase().indexOf(name) !== -1){
                return Router.current() && true;
            }else{
                return false;
            }
        });
        return active && 'active';
    },
    isAdmin: function(){
        console.log('isAdmin', Meteor.user())
        var user = Meteor.user()

        if(user === null){
            console.log('\tNo user logged in')
            return false
        }

        if(!user.hasOwnProperty('services')){
            console.log('\tUser does not uses any services')
            return false
        }

        if(!user.services.hasOwnProperty('google')){
            console.log('\tUser does not use google')
            return false
        }

        if(!user.hasOwnProperty('profile')){
            console.log('\tUser does not have a profile')
            return false
        }

        if(!user.profile.hasOwnProperty('name')){
            console.log('\tUser does not have a profile name')
            return false
        }

        if(user.profile.name !== "Emmanuel Seynaeve"){
            console.log('\tUser does not have the right profile name')
            return false
        }

        return true;
    }
});
    
Template.header.rendered = function(){
    //  reset to default body
    $('body').attr('class', null);
};