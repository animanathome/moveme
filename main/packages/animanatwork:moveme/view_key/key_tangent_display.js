MM.KeyTangentDisplay = function ( animCurve ){
	this.animCurve = animCurve;
    this.keyDisplaySize = 6;	
    
    this.line = undefined;
    this.dvrt = undefined;
    this.svrt = undefined;   
    this.keys = []; // the indices of the keys we're drawing the tangents for

    //  animation curve
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( { color : 0x990099 , linewidth : 1 } );    
    this.line = new THREE.Line( geometry, material , THREE.LinePieces);
    this.line.name = 'tangentLine'
    this.line.animParent = this;  //  pass on this so we can get it later

    //  normal, unselected keys
    var keyGeometry = new THREE.Geometry(); 
    var keyMaterial = new THREE.ParticleBasicMaterial({ size: this.keyDisplaySize, 
        color: 0x990099, sizeAttenuation: false} );                
    this.dvrt = new THREE.ParticleSystem( keyGeometry, keyMaterial );    
    this.dvrt.name = 'tangentKeyDefault'

    //  selected keys
    var keySelectedGeometry = new THREE.Geometry(); 
    var keySelectedMaterial = new THREE.ParticleBasicMaterial( { size: this.keyDisplaySize, 
        color: 0xFFFF33, sizeAttenuation: false} );            
    this.svrt = new THREE.ParticleSystem( keySelectedGeometry, keySelectedMaterial );   
    this.svrt.name = 'tangentKeySelected'

    this.update()

    return this
};


MM.KeyTangentDisplay.prototype = {
    constructor: MM.KeyTangentDisplay,
    
    updateTangents: function()
    {
        // console.log('\tupdateTangents')
        // console.log('\tselected in indices', this.animCurve.tsi)
        // console.log('\tselected out indices', this.animCurve.tso)
        this.dvrt.geometry.verticesNeedUpdate = true;
        this.svrt.geometry.verticesNeedUpdate = true;
        this.line.geometry.verticesNeedUpdate = true;

        this.dvrt.geometry.buffersNeedUpdate = true;
        this.svrt.geometry.buffersNeedUpdate = true;
        this.line.geometry.buffersNeedUpdate = true;
        
        this.dvrt.geometry.vertices = [];
        this.svrt.geometry.vertices = [];
        this.line.geometry.vertices = [];

        var buildTangent;
        var index, inX, inY, outX, outY;
        for( var i = 0; i < this.keys.length; i++)
        {       
            //  only draw tangents under the following conditions
            //  index ot and index + 1 it = bezier
            //  index it and index - 1 ot = bezier
            index = this.keys[i]

            buildTangent = false
            if( index > 0 && this.animCurve.it[index] === 2 
                          && this.animCurve.ot[index-1] === 2)
            {
                buildTangent = true;
            } 

            if( index < (this.animCurve.t.length -1) 
                && this.animCurve.ot[index] === 2 
                && this.animCurve.it[index+1] === 2)
            {
                buildTangent = true;
            }
            
            if( buildTangent )
            {
                // console.log(index, 'in tangent', this.animCurve.itv[index].x, this.animCurve.itv[index].y)                
                // console.log(index, 'out tangent', this.animCurve.otv[index].x, this.animCurve.otv[index].y)
                // console.log(index, 'time', this.animCurve.t[index], 'value', this.animCurve.v[index])

                inX = this.animCurve.t[index] + this.animCurve.itv[index].x
                inY = this.animCurve.v[index] + this.animCurve.itv[index].y
                outX = this.animCurve.t[index] + this.animCurve.otv[index].x
                outY = this.animCurve.v[index] + this.animCurve.otv[index].y

                //  in tangent selected
                if( this.animCurve.tsi.indexOf(index) !== -1)
                {
                    // console.log('\t\t', 'in selected')
                    this.dvrt.geometry.vertices.push( new THREE.Vector3(inX, inY, -10))
                    this.svrt.geometry.vertices.push( new THREE.Vector3(inX, inY, 10))
                }else{
                    this.dvrt.geometry.vertices.push( new THREE.Vector3(inX, inY, 10))
                    this.svrt.geometry.vertices.push( new THREE.Vector3(inX, inY, -10))
                }

                //  out tangent selected
                if( this.animCurve.tso.indexOf(index) !== -1)
                {
                    // console.log('\t\t', 'out selected')
                    this.dvrt.geometry.vertices.push( new THREE.Vector3(outX, outY, -10))            
                    this.svrt.geometry.vertices.push( new THREE.Vector3(outX, outY, 10))
                }else{
                    this.dvrt.geometry.vertices.push( new THREE.Vector3(outX, outY, 10))            
                    this.svrt.geometry.vertices.push( new THREE.Vector3(outX, outY, -10))
                }                

                //  left, middle, right
                this.line.geometry.vertices.push( new THREE.Vector3(inX, inY, 2))
                this.line.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[index], this.animCurve.v[index], 2))

                this.line.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[index], this.animCurve.v[index], 2))
                this.line.geometry.vertices.push( new THREE.Vector3(outX, outY, 2))
            }
        }        
    },

    update: function()
    {
        this.updateTangents();        
    }
}