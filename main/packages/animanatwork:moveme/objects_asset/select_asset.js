MM.AssetSelect = function( editor ){
    // console.log('AssetSelect')

    var signals = editor.signals;
    var container = new MMUI.Panel();        
    container.setClass('assetSelect')     

    var assetPanel = undefined; 
    var assetSelectList = undefined; // select asset sets panel
    var assetKeyPanel = undefined; // key asset sets panel

    var selectPanel = undefined;
    var selectBindData = undefined;

    var buildContent = function( namespace , asset , editor){
    //  build selection interface     
        while (assetPanel.dom.firstChild) {
            assetPanel.dom.removeChild(assetPanel.dom.firstChild);
        }
                
        try {        
            var selectFunction = 'MM.'+asset+'Select("'+namespace+'", assetPanel, editor)'
            console.log('Trying to run', selectFunction)
            selectPanel = eval(selectFunction)
        }
        catch(err) {
            console.log('No selection interface available for', asset, 
                'with namespace', namespace)
        }

    //  build select and key interface
        while (assetKeyPanel.dom.firstChild) {
            assetKeyPanel.dom.removeChild(assetKeyPanel.dom.firstChild);
        }

        try {
            var keyFunction = 'MM.'+asset+'KeyAll("'+namespace+'",assetKeyPanel, editor)'
            console.log('Trying to run', keyFunction)
            eval(keyFunction)
        }
        catch(err) {
            console.log('No key interface available for', asset, 'with namespace', namespace)
        }
        selectBindData = getUIBindData();
        updateUI();
    }

    function buildUI(){
        var assetSelect = new MMUI.Panel().setClass('assetSelectList');
        var assetSelectText = new MMUI.Text( 'Asset' ).setClass('sidebar-text');
        assetSelectList = new MMUI.Select().setClass('sidebar-input'); 
        assetSelectList.setOptions({"none:none":"none"}).onChange(
            function(){
                var nameCode = assetSelectList.getValue();
                console.log('\tselected', nameCode)

                var parts = nameCode.split(':')
                var namespace = parts[0]
                var asset = parts[1]

                buildContent( namespace, asset, editor );
            }
        )
        assetSelect.add( assetSelectText )
        assetSelect.add( assetSelectList )        

        assetPanel = new MMUI.Panel().setClass('asset-select-view');
        // assetPanel.setMarginTop('5px') 
        assetSelect.add(assetPanel)

        assetKeyPanel = new MMUI.Panel().setClass('assetKeyView');
        // assetKeyPanel.setMarginTop('5px') 
        assetSelect.add(assetKeyPanel)

        container.add( assetSelect ); 
    }

    function getUIBindData(){
        console.log('getBindData from', selectPanel)
        //  WARNING: since we don't have unique names for each element we just store all of our data in one big array. This means that we can't change the order of the element. Otherwise the data will become invalid.
        if(selectPanel === undefined ){
            return
        }

        var data = [];
        var i, j, element, tdata, value;
        var edits = ['left', 'right', 'top', 'bottom']
        for( i = 0, j = selectPanel.dom.childNodes.length; i < j; i++){
            console.log('\t', selectPanel.dom.childNodes[i])
            element = selectPanel.dom.childNodes[i]
            
            //  the should always be the first element
            if( element.nodeName === 'IMG'){
                data.push({
                    name: 'img',
                    width: element.width,
                    height: element.height
                })
            }
            if( element.nodeName === 'BUTTON'){
                tdata = {}                
                for(k = 0; k < 4; k++ ){                    
                    value = parseFloat(element.style[edits[k]])
                    if(! isNaN(value)){
                        console.log('\t', edits[k], value)
                        tdata[edits[k]]=value
                    }
                }
                data.push(tdata)
            }
        }
        // console.log('\tresult', data)
        return data;
    }
    
    function updateUI(){
        console.log('updateUI')
        console.log('\tdata', selectBindData)
        console.log('\tpanel', selectPanel)
        
        if( selectPanel === undefined){
            return
        }
        
        var multi = selectPanel.dom.parentNode.offsetWidth/selectBindData[0].width;

        var i, j, element;
        for( i = 0, j = selectPanel.dom.childNodes.length; i < j; i++){
            element = selectPanel.dom.childNodes[i]
            
            //  this should always be the first element
            if( element.nodeName === 'IMG'){
                element.width = selectBindData[0].width * multi;
                element.height = selectBindData[0].height * multi;

                console.log(selectPanel.dom.parentNode)
                selectPanel.dom.parentNode.style.height = (selectBindData[0].height * multi) + 'px';
            }

            var edits = ['left', 'right', 'top', 'bottom']
            if( element.nodeName === 'BUTTON'){
                for(k = 0; k < 4; k++ ){
                    if( selectBindData[i].hasOwnProperty(edits[k])){
                        element.style[edits[k]] = (multi * selectBindData[i][edits[k]])+'px'
                    }
                }
            }
        }


    }

    buildUI();  

    signals.assetAdded.add( function() {
        console.log('AssetSelect: assetAdded')
        assetSelectList.setOptions( editor.getNamespaceFromAssetObjects());
    })

    signals.assetRemoved.add( function() {
        console.log('AssetSelect: assetRemoved')
        assetSelectList.setOptions( editor.getNamespaceFromAssetObjects());
    })

    signals.layoutResized.add( function(item){
        if( item === 'main'){
            console.log('resizing selection menu')
            updateUI();
        }
    })


    return container;
}