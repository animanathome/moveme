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

        //  convert the frame number to a 4 number string (0 -> 0000)
        var fas = i.toString()
        var frame;
        if(fas.length === 1){
            frame = '000'+fas
        }else if(fas.length === 2){
            frame = '00'+fas
        }else if(fas.length === 3){
            frame = '0'+fas
        }else if(fas.length === 4){
            frame = fas
        }else{
            utils.dump('Unsuppored frame number')
        }

        this.capture(sargs['framesPath']+'/'+sargs['versionId']+'-'+frame+'.png', {
                  top:0, left:0
                , width:sargs['screenResolutionX']
                , height:sargs['screenResolutionY']
            }
        ); 
        
    }
})

casper.run();

// casper.exit();

