Template.shotEdit.rendered = function(){
 	console.log('shotPage', this.data)

 	console.log('\ttitle', this.find('#title'))

//	PLACEHOLDERS
 	var title = this.find('#title');
 	title.setAttribute('value', this.data.shots[0].title)

 	var description = this.find('#description')
 	description.value = this.data.shots[0].description;

 	var duration = this.find('#duration')
 	duration.setAttribute('value', this.data.shots[0].duration)

 	var fps = this.find('#fps')
 	fps.setAttribute('value', this.data.shots[0].fps)

//	BREADCRUMB
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
	var sa = document.createElement('a')
	sa.href = Router.routes['shotPage'].url({
		projectId:this.data.projects[0]._id,
		_id:this.data.shots[0]._id
	})
	sa.textContent = this.data.shots[0].title

	sl.appendChild(sa)
	breadcrumb.appendChild(sl)

	//	edit
	var el = document.createElement('li')
	el.className = "active"
	var ea = document.createElement('a')
	ea.textContent = 'Edit'

	el.appendChild(ea)
	breadcrumb.appendChild(el)
}

Template.shotEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentShotId = this.shots[0]._id;
    var currentProjectId = this.projects[0]._id;

    var shotProperties = {
        title: $(e.target).find('[name=title]').val()
      , description: $(e.target).find('[name=description]').val()
      , duration: $(e.target).find('[name=duration]').val()
      , fps: $(e.target).find('[name=fps]').find(":selected").text()
    }

    console.log(shotProperties)

    ShotList.update(currentShotId, {$set: shotProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('shotPage', {projectId: currentProjectId, _id: currentShotId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) 
    {
    	//	update project
    	ProjectList.update({
	      _id: this.projects[0]._id
	    },{
	      $inc: {
	        shotCount: -1, 
	        duration: -this.shots[0].duration
	      }
	    })

    	//	remove shot
      	ShotList.remove(this.shots[0]._id);

      	//	go the project page
      	Router.go('projectPage', {_id: this.projects[0]._id });
    }
  }
});