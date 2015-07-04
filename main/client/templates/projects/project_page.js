Template.projectPage.helpers({
  // hasShots: function(){
  // 	// console.log('Number of shots', ShotList.find({projectId: this._id}).count())
  //   if (Meteor.user()){
  //   	if( ShotList.find({projectId: this._id}).count() === 0 ){
  //           Meteor.call('shotInsert', {
  //               projectId: this._id,
  //               title: 'Untitled shot',
  //               description: 'No description yet',
  //               duration: 24,
  //               fps: 24
  //           })
  //   	}
  //   }
  // },
  shotList: function() {
  	console.log('project', this._id)
    return ShotList.find({
      projectId: this._id
    });
  }
});

Template.projectPage.rendered = function(){
  console.log('projectPage', this.data)

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
  pl.className = "active"
  pa.href = Router.routes['projectPage'].url({_id:this.data._id})
  pa.textContent = this.data.title
  
  pl.appendChild(pa)
  breadcrumb.appendChild(pl)
}