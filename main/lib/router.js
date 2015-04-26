var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  onBeforeAction: function(){
    if(moveme !== undefined ){
        if(moveme.hasOwnProperty('shortcutEvents')){
            $(window).unbind('keydown', moveme.shortcutEvents)    
        }        
        delete moveme;
        moveme = {};
    }
    this.next()
  },
  waitOn: function(){
    return [ Meteor.subscribe('notifications')
           , Meteor.subscribe('numberOfAssets', 6)];
  }  
});

//	introduction page
Router.route('/', {
    name: 'intro',
    waitOn: function(){
        return [
            Meteor.subscribe('numberOfVersions', 6),
            Meteor.subscribe('tutorials'),
            Meteor.subscribe('numberOfAssets', 6)
        ];
    },
    onBeforeAction: function(){
        this.next();
    },
    data: function(){
        return {
              versions: VersionList.find({})
            , tutorials: TutorialList.find({})
            , assets: AssetList.find({})
        }
    }    
});

//  assets
Router.route('/assets',{
    name: 'assets',
    waitOn: function(){
        return [
            Meteor.subscribe('assets')
        ]
    },
    data: function(){
        return AssetList.find({})        
    }
})

//  learn
//  productionLearn, toolsLearn, assetsLearn
learnController = RouteController.extend({
    template: 'learn',
    // categoryToShow: 'tools',
    subscriptions: function() {
        this.tutorialsSub = Meteor.subscribe('tutorialsByCategory', this.categoryToShow);
    },    
    waitOn: function() {
        return Meteor.subscribe('tutorialsByCategory', this.categoryToShow);
    },
    tutorials: function() {
        return TutorialList.find({category:this.categoryToShow});
    },    
    data: function(){
        return {
            tutorials: this.tutorials(),
            ready: this.tutorialsSub.ready
        }
    }
})

productionLearnController = learnController.extend({
    categoryToShow: 'project'
});

Router.route('/learn/project', {
     name: 'projectLearn'
    ,controller: productionLearnController
});

//  learn about tools
toolsLearnController = learnController.extend({
    categoryToShow: 'tools'
});

Router.route('/learn/tools', {
     name: 'toolsLearn'
    ,controller: toolsLearnController
});

//  learn about assets
assetLearnController = learnController.extend({
    categoryToShow: 'asset'
});

Router.route('/learn/asset', {
     name: 'assetLearn'
    ,controller: assetLearnController
});


//  ----------------------------------------------------------------------------
//  ANIMATION/RENDER
//	animation editor
Router.route('/animation/project/:projectId/shot/:shotId/version/:_id', {
    name: 'anim',
    waitOn: function() {
        return [
            Meteor.subscribe('singleProject', this.params.projectId),
            Meteor.subscribe('singleShot', this.params.shotId),
            Meteor.subscribe('singleVersion', this.params._id),
            Meteor.subscribe('sceneVersion', this.params._id)
        ];
    },
    data: function(){ 
        return {
            projects: [ProjectList.findOne(this.params.projectId)],
            shots: [ShotList.findOne(this.params.shotId)],
            versions: [VersionList.findOne(this.params._id)]
        }
    }
});

//  render editor
Router.route('/render/project/:projectId/shot/:shotId/version/:_id',{
    name: 'render',
    waitOn: function() {
        return [
            Meteor.subscribe('singleProject', this.params.projectId),
            Meteor.subscribe('singleShot', this.params.shotId),
            Meteor.subscribe('singleVersion', this.params._id),
            Meteor.subscribe('sceneVersion', this.params._id)
        ];
    },   
    data: function(){
        return {
            projects: [ProjectList.findOne(this.params.projectId)],
            shots: [ShotList.findOne(this.params.shotId)],
            versions: [VersionList.findOne(this.params._id)]
        }
    }
})

//  ---------------------------------------------------------------------------
//  TRY
Router.route('/try', {
      name: 'try'
});

//  ---------------------------------------------------------------------------
//  ASSETS
//  asset discussion page
Router.route('/asset/:_id', {
    name: 'assetPage',
    //  preload all of the comments for the given post
    waitOn: function() {
        return [
            Meteor.subscribe('singleAsset', this.params._id),
            Meteor.subscribe('comments', this.params._id, 'asset')
        ];
    },
    data: function() { 
      return AssetList.findOne(this.params._id);
    } 
});

Router.route('/assetsTry/:_id', {
    name: 'assetTry',
    waitOn: function() {
        return Meteor.subscribe('singleAsset', this.params._id);        
    },
    data: function() { 
      return AssetList.findOne(this.params._id);
    } 
});

//  ---------------------------------------------------------------------------
//	SUGGESTIONS/REQUESTS/POSTS

SuggestController = RouteController.extend({
    template: 'suggest',
    increment: 5, 
    postsLimit: function() { 
        return parseInt(this.params.postsLimit) || this.increment; 
    },
    findOptions: function() {
        return {sort: this.sort, limit: this.postsLimit()};
    },
    subscriptions: function() {
        this.postsSub = Meteor.subscribe('posts', this.findOptions());
    },    
    waitOn: function() {
        return Meteor.subscribe('posts', this.findOptions());
    },
    posts: function() {
        return Posts.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.posts().count() === this.postsLimit();
        var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
        return {
          posts: this.posts(),
          ready: this.postsSub.ready,
          nextPath: hasMore ? this.nextPath() : null
        };
    }
});

NewSuggestController = SuggestController.extend({
  sort: {submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.newSuggest.path({postsLimit: this.postsLimit() + this.increment})
  }
});

BestSuggestController = SuggestController.extend({
  sort: {votes: -1, submitted: -1, _id: -1},
  nextPath: function() {
    return Router.routes.bestSuggest.path({postsLimit: this.postsLimit() + this.increment})
  }
});


Router.route('/suggest/', {
	 name: 'suggest'
    ,controller: NewSuggestController
});

Router.route('/suggest/new/:postsLimit?', {
     name: 'newSuggest'
    // ,controller: NewSuggestController
});

Router.route('/suggest/best/:postsLimit?', {
     name: 'bestSuggest'
    // ,controller: BestSuggestController
});

Router.route('/posts/:_id', {
    name: 'postPage',
    //  preload all of the comments for the given post
    waitOn: function() {
        return [
            Meteor.subscribe('singlePost', this.params._id),
            Meteor.subscribe('comments', this.params._id, 'suggest')
        ];
    },
    data: function() { 
    	return Posts.findOne(this.params._id);
    } 
});

Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    waitOn: function() { 
        return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() { 
        return Posts.findOne(this.params._id); 
    }
});

Router.route('/submit', {name: 'postSubmit'});

//	show the not found page when an invalid post page is requested
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(requireLogin, {only: 'projectSubmit'});
Router.onBeforeAction(requireLogin, {only: ['prod','projectEdit']});

//  ----------------------------------------------------------------------------
//  PROJECTS
Router.route('/prod', {
  name: 'prod',
  waitOn: function(){
    return [ Meteor.subscribe('projects')]
  }
});

Router.route('/projectSubmit', { name: 'projectSubmit'});

Router.route('/project/:_id', {
    name: 'projectPage',
    waitOn: function() { 
        return [
          Meteor.subscribe('singleProject', this.params._id),
          Meteor.subscribe('shots', this.params._id)
          ];
    },  
    data: function(){ 
        return ProjectList.findOne(this.params._id); 
    }
});

Router.route('/project/:_id/edit', {
    name: 'projectEdit',
    waitOn: function() { 
      return Meteor.subscribe('singleProject', this.params._id);
    },
    data: function() {
      return ProjectList.findOne(this.params._id); 
    }
});

//  ----------------------------------------------------------------------------
//  SHOTS
Router.route('/shotSubmit', { name: 'shotSubmit'});

Router.route('/project/:projectId/shotEdit/:_id', {
    name: 'shotEdit',
    waitOn: function() { 
      return [
                Meteor.subscribe('singleProject', this.params.projectId),
                Meteor.subscribe('singleShot', this.params._id)
             ];
    },
    data: function() {
      return {
                projects: [ProjectList.findOne(this.params.projectId)],
                shots: [ShotList.findOne(this.params._id)]
             };
    }    
});

ShotController = RouteController.extend({
    template: 'shotPage',
    increment: 5,
    versionsLimit: function(){
        return parseInt(this.params.versionsLimit) || this.increment;
    },
    findOptions: function(){
        return {submitted: -1, limit:this.versionsLimit()}
    },    
    waitOn: function() { 
        return [
            Meteor.subscribe('singleProject', this.params.projectId),
            Meteor.subscribe('singleShot', this.params._id),
            Meteor.subscribe('versions', this.params._id, this.findOptions())
        ];
    }, 
    versions: function() {
        return VersionList.find({ 
                    projectId: this.params.projectId, 
                    shotId: this.params._id }, {
                        sort: this.findOptions()
                })
    },
    nextPath: function() {
        return Router.routes.shotPage.path({
            projectId: this.params.projectId,
            _id: this.params._id,
            versionsLimit: this.versionsLimit() + this.increment
        })
    },
    data: function(){    
        var hasMore = this.versions().count() === this.versionsLimit();
        var nextPath = this.route.path({versionsLimit: this.versionsLimit() + this.increment});
        
        return {
            projects: [ProjectList.findOne(this.params.projectId)]
            , shots: [ShotList.findOne(this.params._id)]
            , versions: this.versions()
            , nextPath: hasMore ? this.nextPath() : null
            };
    }
})

Router.route('/project/:projectId/shot/:_id/:versionsLimit?', {
      name: 'shotPage' 
    , controller: ShotController
});