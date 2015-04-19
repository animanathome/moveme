Template.shotPage.helpers({
  hasVersions: function(){
    if( VersionList.find({projectId: this.projects[0]._id, 
                          shotId: this.shots[0]._id}).count() === 0 ){
  		return false;
  	}else{
  		return true;
  	}
  }
});

Template.shotPage.rendered = function(){
  console.log('shotPage', this.data)

//  populate breadcrumbs
  var breadcrumb = this.find("#breadcrumb")
  console.log('\tbreadcrumb', breadcrumb)

  //  projects
  var psl = document.createElement('li')
  var psa = document.createElement('a')
  psa.href = Router.routes['prod'].url();
  psa.textContent = 'Projects'
  
  psl.appendChild(psa)
  breadcrumb.appendChild(psl)

  //  project
  var pl = document.createElement('li')
  var pa = document.createElement('a')
  pa.href = Router.routes['projectPage'].url({_id:this.data.projects[0]._id})
  pa.textContent = this.data.projects[0].title
  
  pl.appendChild(pa)
  breadcrumb.appendChild(pl)

  //  shot
  var sl = document.createElement('li')
  sl.className = "active"
  var sa = document.createElement('a')
  sa.textContent = this.data.shots[0].title

  sl.appendChild(sa)
  breadcrumb.appendChild(sl)

//  activate all tooltips for this page
  $(function (){
    $('[data-toggle="tooltip"]').tooltip()
  })
}

Template.shotPage.events({
  'click .start': function(e) {
    e.preventDefault();
    console.log('Start animating shot', this.shots[0]._id);

    var pathToGo = "/animation/";
    pathToGo += "project/"+this.projects[0]._id+"/";
    pathToGo += "shot/"+this.shots[0]._id+"/";
    pathToGo += "version/-1";
    Router.go(pathToGo)     
  },
  
  'click .continueFromLatest': function(e) {
    e.preventDefault();

    //  get the latest version for the given shot
    var version = VersionList.findOne({
      projectId: this.projects[0]._id, 
      shotId: this.shots[0]._id}, 
      {sort: {submitted : -1 }})
    
    console.log('Continue working from latest version submitted on', version.submitted.toString());

    //  encode the URL and launch the animation app
    var pathToGo = "/animation/";
    pathToGo += "project/"+this.projects[0]._id+"/";
    pathToGo += "shot/"+this.shots[0]._id+"/";
    pathToGo += "version/"+version._id;
    Router.go(pathToGo)
  }
});