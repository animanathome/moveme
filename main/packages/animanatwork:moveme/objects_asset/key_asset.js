MM.AssetKeySelectControls = function( editor ){
    /*
    Creates a UI element containing a title, key and select button
    allowing us to easily select or key the instances controls
    */
    console.log('MM.AssetKeySelectControls')

    this.editor = editor;
    this.controls = [];
    var scope = this;

    this.panel = new MMUI.Panel().setClass('pnl-asset-select');
    this.titleTxt = new MMUI.Text().setClass('sidebar-text');
    this.selectBtn = new MMUI.Button('Select').setClass('btn btn-asset-select').onClick( function(){
        scope.selectControls();
    });
    this.keyBtn = new MMUI.Button('Key').setClass('btn btn-asset-select').onClick( function(){
        scope.keyControls();
    })

    this.panel.add( this.titleTxt)
    this.panel.add( this.selectBtn)
    this.panel.add( this.keyBtn)

    console.log('\treturning', this)
};

MM.AssetKeySelectControls.prototype = {
    setTitle : function( title ){
        console.log('\tsetTitle', title)
        this.titleTxt.setValue( title )
        return this;
    },
    setControls : function( controls ){
        console.log('\tsetControls', controls)
        this.controls = controls;
        return this;
    },
    keyControls : function(){
        console.log('AssetKeySelectControls: keyControls', this.controls)
        this.editor.keyObjects( this.controls )
        return this;
    },
    selectControls : function(){
        console.log('AssetKeySelectControls: selectControls', this.controls)
        this.editor.selectObjectsByName( this.controls )
        return this;
    },
    setBackgroundColor : function( color ){
        this.panel.setBackgroundColor( color );
        return this;
    }
}

MM.AssetKeyGlobal = function( editor ){
    var signals = editor.signals;

    var container = new MMUI.Panel();
    container.setClass( 'assetKey')
    container.setMarginTop('5px')

    container.keyObjects = function( objects ){
        console.log('keyObjects', objects)
        var i, j, object;
        for( i = 0, j = objects.length; i < j; i++){
            console.log('\tkeying', objects[i]) 
            object = editor.scene.getObjectByName(objects[i], true)  
            if( object !== undefined ){
                object.keyAnimated( editor.time, editor.defaultTangentType, editor.defaultTangentType);
            }else{
                console.warn('\tUnable to find', objects[i])
            }
        }
        signals.objectChanged.dispatch( this.selected )
    }

    function deleteUI( ){
        // console.log('AssetSelect: deleteUI')

        //  remove all children
        container.setDisplay('none')
        while (container.dom.firstChild) {
            container.dom.removeChild(container.dom.firstChild);
        }
    }
    
    signals.objectSelected.add( function ( object ){
        console.log('AssetKeyGlobal: objectSelected', object)        
        deleteUI()
        if( object === null || object === undefined ){                      
            return
        }

        //  only display the asset select when we
        //  select an object that belongs to the man
        //  otherwise hide it...
        if( object.asset !== undefined ){       
            container.setDisplay('block')
            try {
                var namespace = object.name.getNamespace()
                var selectFunction = object.asset+'KeyAll("'+namespace+'",container)'
                console.log('Trying to run', selectFunction)
                eval(selectFunction)
            }
            catch(err) {
                console.log('No selection interface available for', object.asset)
            }

        }
    });    

    return container
}