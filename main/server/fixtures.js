//	pre-populate collections when they are empty
//	this is for testing
var tomId, sachaId, manuId;
if ( Meteor.users.find().count() === 0 ) {
    manuId = Accounts.createUser({
        username: 'manu',
        email: 'animanatwork@me.com',
        password: 'moveme',
        profile: {
            first_name: 'fname',
            last_name: 'lname',
            company: 'company',
        }
    });
    console.log('manu', manuId)

  // create two users
    tomId = Meteor.users.insert({
      profile: { name: 'Tom Coleman' }
    });
    
    sachaId = Meteor.users.insert({
      profile: { name: 'Sacha Greif' }
    });
}


//  Assets
//    + Comment

if (AssetList.find().count() === 0) {
	var now = new Date().getTime();
  tom = Meteor.users.findOne(tomId);

  var bounceId = AssetList.insert({    
    author: 'manu',
    userId: manuId,
    title: 'Ball', // rename to bounce
    description: 'A simple asset, a real base for starting animation. Try our bouncing ball tutorial with this asset to learn more about timing and spacing.',
    submitted: new Date(now - 1 * 3600 * 1000),
    thumbnail: '/assets/assetBall_000.jpg',
    animation: '/data/sphere/animation/jump.json',
    level: 1,
    commentsCount: 1,    
    votes: 0
  });

  Comments.insert({
    postId: bounceId, // maybe we need to generalize the name postId?
    postType: 'asset',
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Love this bounce asset. It is a great way to get started!'
  });

	AssetList.insert({
		author: 'manu',
    userId: manuId,
		title: 'Tail',
		description: 'This asset is a little more challenging with the addition of the tail. use it for overlapping action as well as squash and stretch.',
		submitted: new Date(now - 2 * 3600 * 1000),
		thumbnail: '/assets/assetTail_000.jpg',
    animation: '/data/tail/animation/jumping_tail.json',
    level: 2,
    commentsCount: 0,
    votes: 0	
	});

	AssetList.insert({
		author: 'manu',
    userId: manuId,
		title: 'Legs',
		description: 'A simple ball with legs for you to have fun with. Make hip moves and walk cycles for instance. Find out how in the tutorial.',
		submitted: new Date(now - 3 * 3600 * 1000),
		thumbnail: '/assets/assetLegs_000.jpg',		
    level: 3,
    commentsCount: 0,
    votes: 0
	});

	AssetList.insert({
		author: 'manu',
    userId: manuId,
		title: 'Mini',
		description: 'A classic body mechanics rig, a simple evolution from Legs! Animate hips, torso, arms, head and see the little tiny in your brain coming to life! Choose from Ik to Fk in few clics.',
		submitted: new Date(now - 4 * 3600 * 1000),
		thumbnail: '/assets/assetMini_000.jpg',
    level: 5,
    commentsCount: 0,
    votes: 0	
	});

  AssetList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Midi',
    description: 'A classic body mechanics rig, a simple evolution from Legs! Animate hips, torso, arms, head and see the little tiny in your brain coming to life! Choose from Ik to Fk in few clics.',
    submitted: new Date(now - 4 * 3600 * 1000),
    thumbnail: '/assets/assetMidi_000.jpg',
    level: 5,
    commentsCount: 0,
    votes: 0  
  }); 

  AssetList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Maxi',
    description: 'A classic body mechanics rig, a simple evolution from Legs! Animate hips, torso, arms, head and see the little tiny in your brain coming to life! Choose from Ik to Fk in few clics.',
    submitted: new Date(now - 4 * 3600 * 1000),
    thumbnail: '/assets/assetMaxi_000.jpg',
    level: 5,
    commentsCount: 0,
    votes: 0  
  }); 

  AssetList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Dino',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 4 * 3600 * 1000),
    thumbnail: '/assets/assetDino.jpg',
    commentsCount: 0,
    votes: 0  
  }); 
}	

//  Project
//    + Shots
//      + Versions
//        + Comment

if( ProjectList.find().count() === 0 ){
	var now = new Date().getTime();

  //  project 1
	var projectId = ProjectList.insert({
		author: 'manu',
    userId: manuId,
		title: 'Jumping around',
		description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
		submitted: new Date(now - 1 * 3600 * 1000),
		shotCount: 2,
    fps: 24,
    duration: 48
	})

  //  shot 1 
  var shotId = ShotList.insert({
    projectId: projectId,
    author: 'manu',
    userId: manuId,
    title: 'The beginning',
    description: 'Modus maluisset et mei, no mel audire veritus. Mel no melius timeam, soleat prompta est ad. Has ipsum elitr ea, vis apeirian petentium cu. Civibus referrentur pro at, sit ei aliquip tractatos salutandi. Possit gloriatur ullamcorper cu nam, ei wisi bonorum est. Nonumes deserunt quo cu, delectus corrumpit quo eu.',
    submitted: new Date(now - 2 * 3600 * 1000),
    shotNumber: 0,
    versionCount: 3,
    fps: 24,
    duration: 24
  })

  //  version 1
  VersionList.insert({
    projectId: projectId,
    shotId: shotId,
    author: 'manu',
    userId: manuId,
    description: 'Blocking',
    submitted: new Date(now - 10 * 3600 * 1000),
    versionNumber: 0,
    fps: 24,
    duration: 24,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeVideoId: 'ZTRpfllQ5-A',
    youTubeImageUrlDef: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlMed: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlHigh: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/'
  })

  //  version 2
  VersionList.insert({
    projectId: projectId,
    shotId: shotId,
    author: 'manu',
    userId: manuId,
    description: 'Adding detail',
    submitted: new Date(now - 11 * 3600 * 1000),
    versionNumber: 1,
    fps: 24,
    duration: 24,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeVideoId: 'iRyrTYxFSeU',
    youTubeImageUrlDef: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlMed: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlHigh: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/'
  })

  //  version 3
  VersionList.insert({
    projectId: projectId,
    shotId: shotId,
    author: 'manu',
    userId: manuId,
    description: 'Done!',
    submitted: new Date(now - 12 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 24,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeVideoId: 'f8E1c2gAIDc',
    youTubeImageUrlDef: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlMed: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlHigh: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/'
  })

  //  version 4
  VersionList.insert({
    projectId: projectId,
    shotId: shotId,
    author: 'manu',
    userId: manuId,
    description: 'Directors tweak',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 24,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeVideoId: 'CJRDYr7TJYo',
    youTubeImageUrlDef: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlMed: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlHigh: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/'
  })  

//  version 5
  VersionList.insert({
    projectId: projectId,
    shotId: shotId,
    author: 'manu',
    userId: manuId,
    description: 'More directors tweaks',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 24,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeVideoId: 'CJRDYr7TJYo',
    youTubeImageUrlDef: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlMed: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlHigh: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/'
  })  

//  version 6
  VersionList.insert({
    projectId: projectId,
    shotId: shotId,
    author: 'manu',
    userId: manuId,
    description: 'Final directors tweaks',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 24,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeVideoId: 'CJRDYr7TJYo',
    youTubeImageUrlDef: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlMed: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/',
    youTubeImageUrlHigh: 'https://i.ytimg.com/s_vi/ZTRpfllQ5-A/'
  })    

  //  shot 2
  ShotList.insert({
    projectId: projectId,
    author: 'manu',
    userId: manuId,
    title: 'The end',
    description: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et',
    submitted: new Date(now - 2 * 3600 * 1000),
    shotNumber: 1,
    versionCount: 0,
    fps: 24,
    duration: 24
  })

  //  project 2
  ProjectList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Falling down',
    description: 'Id mei honestatis cotidieque. Ad assum aliquid ullamcorper qui, laoreet inermis qui at, invenire accommodare id cum. Appetere deterruisset necessitatibus id vix, no pri graeci quidam reprehendunt. Ad vis iisque neglegentur, molestie inciderint interpretaris vix eu. Quo ne lorem dicat errem, est ut nonumes comprehensam. Mel sale utamur consetetur ne, ea eius debet pericula his.',
    submitted: new Date(now - 3 * 3600 * 1000),
    shotCount: 0,
    fps: 24,
    duration: 0
  })

}

//  Post
//    + Comment
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  
  var tom = Meteor.users.findOne(tomId);  
  var sacha = Meteor.users.findOne(sachaId);

  // for (var i = 0; i < 10; i++) {
  //   Posts.insert({
  //     title: 'Test post #' + i,
  //     body: 'Random text',
  //     author: sacha.profile.name,
  //     userId: sacha._id,
  //     // url: 'http://google.com/?q=test-' + i,
  //     submitted: new Date(now - i * 3600 * 1000),
  //     commentsCount: 0,
  //     upvoters: [],
  //     votes: 0
  //   });
  //  }

  //  create posts  
  var addAudioId = Posts.insert({
    title: 'Add audio support',
    body: 'Would be nice to have support for audio',
    userId: sacha._id,
    author: sacha.profile.name,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0
  });

  var addQuadrupedId = Posts.insert({
    title: 'Add quadruped asset',
    body: 'Can we have a quadruped please? Pretty please?',
    userId: sacha._id,
    author: sacha.profile.name,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  var addDrawId = Posts.insert({
    title: 'Add the ability to draw',
    body: 'Would be nice if we could draw on top of the viewport. We could use it better communicate corrections or to even animate particle effects.',
    userId: sacha._id,
    author: sacha.profile.name,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 6 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  var addRigId = Posts.insert({
    title: 'Create custom rigs',
    body: 'It would be nice if we could rig custom models. Right now we can only use pre-build rigs.',
    userId: sacha._id,
    author: sacha.profile.name,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 4 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  Comments.insert({
    postId: addAudioId,
    postType: 'suggest',
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project, can I get involved?'
    // ,type: 'suggest'
  });

  Comments.insert({
    postId: addAudioId,
    postType: 'suggest',
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
    // ,type: 'suggest'
  });
}

if( TutorialList.find().count() === 0 ){
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Using Sphere',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeVideoId: "mWvYSjkYqpE",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Using Tail',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeVideoId: "Zl3sSOL0LtE",
    thumbnail: '/tutorials/asset_tail_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Using Legs',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeVideoId: "ll_lStU7Dxg",
    thumbnail: '/tutorials/asset_legs_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Using Midi',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeVideoId: "4utrccoVISU",
    thumbnail: '/tutorials/asset_midi_screen.png'
  })

  // TutorialList.insert({
  //   author: 'manu',
  //   userId: manuId,
  //   title: 'Projects',
  //   description: 'Here we are going to go over how we can create and edit projects.',
  //   submitted: new Date(now - 1 * 3600 * 1000),
  //   category: 'project',
  //   youTubeVideoId: "FZ7U7THxe_w"
  // })

  // TutorialList.insert({
  //   author: 'manu',
  //   userId: manuId,
  //   title: 'Shots',
  //   description: 'What are shots and how do they relate to our projects?',
  //   submitted: new Date(now - 1 * 3600 * 1000),
  //   category: 'project',
  //   youTubeVideoId: "FZ7U7THxe_w"
  // })

  // TutorialList.insert({
  //   author: 'manu',
  //   userId: manuId,
  //   title: 'Versions',
  //   description: 'What are versions and how do they related our shots?',
  //   submitted: new Date(now - 1 * 3600 * 1000),
  //   category: 'project',
  //   youTubeVideoId: "FZ7U7THxe_w"
  // })

  //  done
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'The Interface',
    description: 'What am I looking at? An introduction talking about the different panels that make up the interface. What are all those panels and why are they there?',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "djuOTkqIJ88",
    thumbnail: '/tutorials/interface_screen.png'
  })

  //  done
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'The Workspace',
    description: 'Workspace and panels. How can I add one more panel? We always seem to run out of space. There is always that one additional panel we would like to add. Learn how we can get the most out of our layout in this tutorial.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "azGY9b87DHE",
    thumbnail: '/tutorials/workspace_screen.png'
  })

  //  done
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Viewport Tools',
    description: 'Learn how to use the viewport tools to move around in our scene; rotate, pan and dolly.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "PWOSvVW83mo",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  //  done
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Scene Tools',
    description: 'Here we go over the select, move, rotate and scale tools. Different ways to use and activate them.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "TqXQ7TIIAFY",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  //  done
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Channel Box',
    description: 'Where can we find all of the different options or channels for the selected object(s)? That would be the channel box. During this tutorial we are going to see the ',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "076dheRD2nk",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

TutorialList.insert({
  author: 'manu',
    userId: manuId,
    title: 'Asset Outliner',
    description: 'When we have a lot of assets into our scene it is sometimes hard to select the right object. This is where the Asset Outliner comes in. It presents us the different objects in a clear and easy to select way.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "FZ7U7THxe_w",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

TutorialList.insert({
  author: 'manu',
    userId: manuId,
    title: 'Asset Selector',
    description: 'Certain Assets are more complex then others. Some have numereous of controls which can be hard to select in the viewport. The Asset Select gives you a different way to select them.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "LQz7akFxrQc",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Key Tools: Part 1',
    description: 'This is an introduction on how to create, edit and delete keys.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "aO1Arpzmi7k",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Key Tools: Part 2',
    description: 'During this tutorial we are going to talk about animation curves and interpolation.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeVideoId: "H40hL7xUKJc",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

// TutorialList.insert({
//     author: 'manu',
//     userId: manuId,
//     title: 'Key Tools: Part 3',
//     description: 'Here we are going to look a bit further on what tangents are and how we can edit them.',
//     submitted: new Date(now - 1 * 3600 * 1000),
//     category: 'tools',
//     youTubeVideoId: "FZ7U7THxe_w"
//   })  
}
