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
  }
});
    
Template.header.rendered = function(){
    //  reset to default body
    $('body').attr('class', null);
};