var casper = require("casper").create({logLevel:"debug"});
var utils = require('utils');
// var path = require('path')



// casper.echo("Casper CLI passed args:");
utils.dump("Casper CLI passed args:")
utils.dump(casper.cli.args);

// casper.echo("Casper CLI passed options:");
utils.dump("Casper CLI passed options:")
utils.dump(casper.cli.options);

var sargs = casper.cli.options

// var page = 'file:///Users/manu/GitHub/MoveMe/test/casperTest/simpleThreeScene.html'
// var page = 'http://localhost:3000/render'
var page = 'http://192.168.1.69:3000/render'
page += '/project/'+sargs['projectId'] 
page += '/shot/'+sargs['shotId']
page += '/version/'+sargs['versionId']

utils.dump('Loading page:')
utils.dump(page)


casper.start(page);
casper.viewport(sargs['screenResolutionX'], sargs['screenResolutionY']);

casper.then(function() {
    var scope = this;
    //  wait for the page to load
    this.wait(10000);
    for(var i = sargs['startFrame']; i < sargs['endFrame']; i++){
        var tFrame = '\trendering frame '+i
        utils.dump(tFrame);
        
        // this.wait(500);
        var value = this.evaluate(function( value ){
            moveme.editor.setTime(value);
            return moveme.editor.time
        }, i)
        // utils.dump(value);

        this.capture(sargs['framesPath']+'/'+sargs['versionId']+i+'.png', 
            { 
                  top:0, left:0
                , width:sargs['screenResolutionX']
                , height:sargs['screenResolutionY']
            }
        ); 
        
    }
})

casper.run();

// casper.exit();

