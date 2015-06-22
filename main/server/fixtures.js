//	pre-populate collections when they are empty
//	this is for testing
var adminId, ambreId, manuId;
if ( Meteor.users.find().count() === 0 ) {
    var now = new Date().getTime();

    // create admin logins
    adminId = Accounts.createUser({
        username: 'admin',
        email: 'animanatwork@gmail.com',
        password: 'admin',
        profile: {
            first_name: 'admin',
            last_name: 'admin',
            company: 'MoveMe',
        }
    });
    console.log('Admin', adminId)

    admin = Meteor.users.findOne(adminId);
    // console.log('\tuser:', admin)
    console.log('\tname:', admin.username)
    console.log('\t-------------')

    // create personal logins
    // manu
    manuId = Accounts.createUser({
        username: 'manu',
        email: 'animanatwork@me.com',
        password: 'moveme',
        profile: {
            first_name: 'Emmanuel',
            last_name: 'Seynaeve',
            company: 'MoveMe',
        }
    });
    console.log('manu', manuId)
    manu = Meteor.users.findOne(manuId)
    console.log('\tname:', manu.username)
    console.log('\t-------------')

    //  ambre
    ambreId = Accounts.createUser({
        username: 'ambre',
        email: 'ambre.maurin@gmail.com',
        password: 'moveme',
        profile: {
            first_name: 'Ambre',
            last_name: 'Maurin',
            company: 'MoveMe',
        }
    });
    console.log('Ambre', ambreId)
    ambre = Meteor.users.findOne(ambreId)
    console.log('\tname:', ambre.username)
    console.log('\t-------------')

//  ---------------------------------------------------------------------------
//  create asset entries
//  

  var bounceId = AssetList.insert({    
    author: manu.username,
    userId: manu._id,
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
    userId: ambre._id,
    author: ambre.username,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Love this bounce asset. It is a great way to get started!'
  });

	AssetList.insert({
		author: manu.username,
    userId: manu._id,
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
		author: manu.username,
    userId: manu._id,
		title: 'Legs',
		description: 'A simple ball with legs for you to have fun with. Make hip moves and walk cycles for instance. Find out how in the tutorial.',
		submitted: new Date(now - 3 * 3600 * 1000),
		thumbnail: '/assets/assetLegs_000.jpg',
    level: 3,
    commentsCount: 0,
    votes: 0
	});

	AssetList.insert({
		author: manu.username,
    userId: manu._id,
		title: 'Mini',
		description: 'A classic body mechanics rig, a simple evolution from Legs! Animate hips, torso, arms, head and see the little tiny in your brain coming to life! Choose from Ik to Fk in few clics.',
		submitted: new Date(now - 4 * 3600 * 1000),
		thumbnail: '/assets/assetMini_000.jpg',
    level: 5,
    commentsCount: 0,
    votes: 0	
	});

  AssetList.insert({
    author: manu.username,
    userId: manu._id,
    title: 'Midi',
    description: 'A classic body mechanics rig, a simple evolution from Legs! Animate hips, torso, arms, head and see the little tiny in your brain coming to life! Choose from Ik to Fk in few clics.',
    submitted: new Date(now - 4 * 3600 * 1000),
    thumbnail: '/assets/assetMidi_000.jpg',
    level: 5,
    commentsCount: 0,
    votes: 0  
  }); 

  AssetList.insert({
    author: manu.username,
    userId: manu._id,
    title: 'Maxi',
    description: 'A classic body mechanics rig, a simple evolution from Legs! Animate hips, torso, arms, head and see the little tiny in your brain coming to life! Choose from Ik to Fk in few clics.',
    submitted: new Date(now - 4 * 3600 * 1000),
    thumbnail: '/assets/assetMaxi_000.jpg',
    level: 5,
    commentsCount: 0,
    votes: 0  
  }); 


//  ---------------------------------------------------------------------------
//  create project, shot and version entries
//  

  function str2ab(str) {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

//  ADMIN submissions

  //  -------------------------------------------------------------------------
  //  Front page demo project
  var front_page_project_id = ProjectList.insert({
    author: admin.username,
    userId: admin._id,
    title: 'Homepage examples',
    description: 'This project contains all of the animation examples we see  on the front page.',
    submitted: new Date(now - 3 * 3600 * 1000),
    shotCount: 0,
    fps: 24,
    duration: 0,
    isActive: true
  })

  //  -----------------------------------------
  //  Jumping ball shot
  var jumping_ball_shot_id = ShotList.insert({
      projectId: front_page_project_id
    , author: admin.username
    , userId: admin._id
    , title: 'Jumping ball'
    , description: 'No description yet.'
    , submitted: new Date(now - 2 * 3600 * 1000)
    , shotNumber: 1
    , versionCount: 1
    , fps: 24
    , duration: 80
    , latestVersionId: ''
    , latestVersionYoutubeId: ''
    , isPublic: true
  })

  //  Create a shot version scene file
  var sceneData = Assets.getText('demo/ball_jumping.json');
  var newFile = new FS.File();       
  newFile.attachData(str2ab(sceneData), {type: 'text/plain'});
  newFile.userId = manuId;
  newFile.versionId = -1;
  var fileId = FileList.insert(newFile);

  //  Jumping ball version 1
  var jumping_ball_shot_version_id = VersionList.insert({
    projectId: front_page_project_id,
    shotId: jumping_ball_shot_id,
    author: admin.username,
    userId: admin._id,
    description: 'What is up there?',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 80,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    fileId: fileId._id,
    youTubeId: 'CJRDYr7TJYo'
  })

  //  Update file to link to shot version
  FileList.update({
    _id: fileId._id
  }, { versionId:jumping_ball_shot_version_id})

  //  Update the shot to link to the latest shot version
  //  NOTE: need to use set instead of just update as the latter will replace all of the data of the document
  ShotList.update(
    { _id: jumping_ball_shot_id}, 
    { $set:
      {
        latestVersionId: jumping_ball_shot_version_id,
        latestVersionYoutubeId: 'CJRDYr7TJYo',
      }
    }
  ) 

  //  -----------------------------------------
  //  Jumping tail shot
  var jumping_tail_shot_id = ShotList.insert({
      projectId: front_page_project_id
    , author: admin.username
    , userId: admin._id
    , title: 'Jumping tail'
    , description: 'No description yet.'
    , submitted: new Date(now - 2 * 3600 * 1000)
    , shotNumber: 1
    , versionCount: 1
    , fps: 24
    , duration: 48
    , latestVersionId: ''
    , latestVersionYoutubeId: ''
    , isPublic: true
  })

  //  Create a shot version scene file
  var sceneData = Assets.getText('demo/tail_jumping.json');
  var newFile = new FS.File();       
  newFile.attachData(str2ab(sceneData), {type: 'text/plain'});
  newFile.userId = manuId;
  newFile.versionId = -1;
  var fileId = FileList.insert(newFile);

  //  Jumping tail version 1
  var jumping_tail_shot_version_id = VersionList.insert({
    projectId: front_page_project_id,
    shotId: jumping_tail_shot_id,
    author: admin.username,
    userId: admin._id,
    description: 'I can go higher',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 48,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    fileId: fileId._id,
    youTubeId: 'SaMGRFxLtdU'
  })

  //  Link scene file to version
  FileList.update({
    _id: fileId._id
  }, { versionId:jumping_tail_shot_version_id})

  //  Update the shot to link to the latest shot version
  ShotList.update({
    _id: jumping_tail_shot_id
  }, { $set:{
      latestVersionId: jumping_tail_shot_version_id,
      latestVersionYoutubeId: 'SaMGRFxLtdU'
    }
  }) 

  //  -----------------------------------------
  //  Running legs shot
  var running_legs_shot_id = ShotList.insert({
      projectId: front_page_project_id
    , author: admin.username
    , userId: admin._id
    , title: 'Running legs'
    , description: 'No description yet.'
    , submitted: new Date(now - 2 * 3600 * 1000)
    , shotNumber: 1
    , versionCount: 1
    , fps: 24
    , duration: 48
    , latestVersionId: ''
    , latestVersionYoutubeId: ''
    , isPublic: true
  })

  //  Running legs version 1
  var running_legs_shot_version_id = VersionList.insert({
    projectId: front_page_project_id,
    shotId: running_legs_shot_id,
    author: admin.username,
    userId: admin._id,
    description: 'Faster! Faster!',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 48,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeId: ''
  }) 

  //  Update the shot to link to the latest version
  ShotList.update({
    _id: running_legs_shot_id
  }, {$set:{
      latestVersionId: running_legs_shot_version_id,
      latestVersionYoutubeId: ''
    }
  })

  //  -----------------------------------------
  //  Midi kicking shot
  var midi_reflection_shot_id = ShotList.insert({
      projectId: front_page_project_id
    , author: admin.username
    , userId: admin._id
    , title: 'Midi kicking shot'
    , description: 'No description yet.'
    , submitted: new Date(now - 2 * 3600 * 1000)
    , shotNumber: 1
    , versionCount: 1
    , fps: 24
    , duration: 48
    , latestVersionId: ''
    , latestVersionYoutubeId: ''
    , isPublic: true   
  })

  //  Create a shot version scene file
  var sceneData = Assets.getText('demo/midi_kicking.json');
  var newFile = new FS.File();       
  newFile.attachData(str2ab(sceneData), {type: 'text/plain'});
  newFile.userId = manuId;
  newFile.versionId = '';
  var fileId = FileList.insert(newFile);

  //  Midi kicking shot version 1
  var midi_reflection_shot_version_id = VersionList.insert({
    projectId: front_page_project_id,
    shotId: midi_reflection_shot_id,
    author: admin.username,
    userId: admin._id,
    description: 'Yeah, that is it!',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 29,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    fileId: fileId._id,
    youTubeId: 'E0p1OaE41pA'
  })  

  //  Link scene file to version
  FileList.update({
    _id: fileId._id
  }, { versionId:midi_reflection_shot_version_id})

  //  Update the shot to link to the latest version
  ShotList.update({
    _id: midi_reflection_shot_id
  }, {$set:{
      latestVersionId: midi_reflection_shot_version_id,
      latestVersionYoutubeId: 'E0p1OaE41pA'
    }
  })

//  MANU submissions
  
  //  -------------------------------------------------------------------------
  //  Front page demo project
  var front_page_project_id = ProjectList.insert({
    author: manu.username,
    userId: manu._id,
    title: 'The beginning',
    description: 'My first steps using moveme.',
    submitted: new Date(now - 3 * 3600 * 1000),
    shotCount: 2,
    fps: 24,
    duration: 96,
    isActive: true
  })

  //  -----------------------------------------
  //  Mini jumping kick shot
  var jumping_kick_shot_id = ShotList.insert({
    projectId: front_page_project_id,
    author: manu.username,
    userId: manu._id,    
    title: 'Jumping kick',
    description: 'No description yet.',
    submitted: new Date(now - 2 * 3600 * 1000),
    shotNumber: 1,
    versionCount: 1,
    fps: 24,
    duration: 48,
    latestVersionId: '',
    latestVersionYoutubeId: ''
    , isPublic: true
  })

  //  Mini jumping kick version 1
  var jumping_kick_shot_version_id = VersionList.insert({
    projectId: front_page_project_id,
    shotId: jumping_kick_shot_id,
    author: manu.username,
    userId: manu._id,
    description: 'Aaaaaaahhhh!',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 48,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeId: ''
  })  

  //  Update the shot to link to the latest version
  ShotList.update({
    _id: jumping_kick_shot_id
  }, { $set:{
      latestVersionId: jumping_kick_shot_version_id,
      latestVersionYoutubeId: ''
    }
  })

  //  -----------------------------------------
  //  Maxi jump run shot
  var maxi_jump_run_shot_id = ShotList.insert({
    projectId: front_page_project_id,
    author: manu.username,
    userId: manu._id,
    title: 'Midi reflection shot',
    description: 'No description yet.',
    submitted: new Date(now - 2 * 3600 * 1000),
    shotNumber: 1,
    versionCount: 1,
    fps: 24,
    duration: 48,
    latestVersionId: '',
    latestVersionYoutubeId: ''
    , isPublic: false
  })

  //  Maxi jump run version 1
  var maxi_jump_run_shot_version_id = VersionList.insert({
    projectId: front_page_project_id,
    shotId: maxi_jump_run_shot_id,
    author: manu.username,
    userId: manu._id,
    description: 'I can make it?!',
    submitted: new Date(now - 13 * 3600 * 1000),
    versionNumber: 2,
    fps: 24,
    duration: 48,
    commentsCount: 0,
    upvoters: [],
    votes: 0,
    youTubeId: ''
  })  

//  Update the shot to link to the latest version
  ShotList.update({
    _id: maxi_jump_run_shot_id
  }, {$set:{
      latestVersionId: maxi_jump_run_shot_version_id,
      latestVersionYoutubeId: ''
    }
  })  

//  ---------------------------------------------------------------------------
//  create posts entries
//  

  var now = new Date().getTime();

  //  create posts  
  var addAudioId = Posts.insert({
    title: 'Add audio support',
    body: 'Would be nice to have support for audio',
    userId: ambre._id,
    author: ambre.username,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0
  });

  var addQuadrupedId = Posts.insert({
    title: 'Add quadruped asset',
    body: 'Can we have a quadruped please? Pretty please?',
    userId: ambre._id,
    author: ambre.username,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  var addDrawId = Posts.insert({
    title: 'Add the ability to draw',
    body: 'Would be nice if we could draw on top of the viewport. We could use it better communicate corrections or to even animate particle effects.',
    userId: ambre._id,
    author: ambre.username,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 6 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  var addRigId = Posts.insert({
    title: 'Create custom rigs',
    body: 'It would be nice if we could rig custom models. Right now we can only use pre-build rigs.',
    userId: ambre._id,
    author: ambre.username,
    // url: 'http://sachagreif.com/introducing-telescope/',    
    submitted: new Date(now - 4 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });

  Comments.insert({
    postId: addAudioId,
    postType: 'suggest',
    userId: ambre._id,
    author: ambre.username,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project, can I get involved?'
    // ,type: 'suggest'
  });

  Comments.insert({
    postId: addAudioId,
    postType: 'suggest',
    userId: ambre._id,
    author: ambre.username,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
    // ,type: 'suggest'
  });

//  ---------------------------------------------------------------------------
//  create tutorial entries
//  

  TutorialList.insert({
    author: manu.username,
    userId: manu._id,
    title: 'Using Sphere',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeId: "mWvYSjkYqpE",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  TutorialList.insert({
    author: manu.username,
    userId: manu._id,
    title: 'Using Tail',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeId: "Zl3sSOL0LtE",
    thumbnail: '/tutorials/asset_tail_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Using Legs',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeId: "ll_lStU7Dxg",
    thumbnail: '/tutorials/asset_legs_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Using Midi',
    description: 'Lorem ipsum dolor sit amet, fierent scripserit nec id, eam libris adipisci eu. Ex quis eruditi maiorum vim. Falli altera putant ad quo. Vim amet idque aliquid no.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'asset',
    youTubeId: "4utrccoVISU",
    thumbnail: '/tutorials/asset_midi_screen.png'
  })

  // TutorialList.insert({
  //   author: 'manu',
  //   userId: manuId,
  //   title: 'Projects',
  //   description: 'Here we are going to go over how we can create and edit projects.',
  //   submitted: new Date(now - 1 * 3600 * 1000),
  //   category: 'project',
  //   youTubeId: "FZ7U7THxe_w"
  // })

  // TutorialList.insert({
  //   author: 'manu',
  //   userId: manuId,
  //   title: 'Shots',
  //   description: 'What are shots and how do they relate to our projects?',
  //   submitted: new Date(now - 1 * 3600 * 1000),
  //   category: 'project',
  //   youTubeId: "FZ7U7THxe_w"
  // })

  // TutorialList.insert({
  //   author: 'manu',
  //   userId: manuId,
  //   title: 'Versions',
  //   description: 'What are versions and how do they related our shots?',
  //   submitted: new Date(now - 1 * 3600 * 1000),
  //   category: 'project',
  //   youTubeId: "FZ7U7THxe_w"
  // })

  //  done
  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'The Interface',
    description: 'What am I looking at? An introduction talking about the different panels that make up the interface. What are all those panels and why are they there?',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeId: "djuOTkqIJ88",
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
    youTubeId: "azGY9b87DHE",
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
    youTubeId: "PWOSvVW83mo",
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
    youTubeId: "TqXQ7TIIAFY",
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
    youTubeId: "076dheRD2nk",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

TutorialList.insert({
  author: 'manu',
    userId: manuId,
    title: 'Asset Outliner',
    description: 'When we have a lot of assets into our scene it is sometimes hard to select the right object. This is where the Asset Outliner comes in. It presents us the different objects in a clear and easy to select way.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeId: "FZ7U7THxe_w",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

TutorialList.insert({
  author: 'manu',
    userId: manuId,
    title: 'Asset Selector',
    description: 'Certain Assets are more complex then others. Some have numereous of controls which can be hard to select in the viewport. The Asset Select gives you a different way to select them.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeId: "LQz7akFxrQc",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Key Tools: Part 1',
    description: 'This is an introduction on how to create, edit and delete keys.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeId: "aO1Arpzmi7k",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

  TutorialList.insert({
    author: 'manu',
    userId: manuId,
    title: 'Key Tools: Part 2',
    description: 'During this tutorial we are going to talk about animation curves and interpolation.',
    submitted: new Date(now - 1 * 3600 * 1000),
    category: 'tools',
    youTubeId: "H40hL7xUKJc",
    thumbnail: '/tutorials/asset_ball_screen.png'
  })

// TutorialList.insert({
//     author: 'manu',
//     userId: manuId,
//     title: 'Key Tools: Part 3',
//     description: 'Here we are going to look a bit further on what tangents are and how we can edit them.',
//     submitted: new Date(now - 1 * 3600 * 1000),
//     category: 'tools',
//     youTubeId: "FZ7U7THxe_w"
//   })  
}
