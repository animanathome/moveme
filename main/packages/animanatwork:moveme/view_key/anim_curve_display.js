MM.AnimCurveDisplay = function ( animCurve ){
	this.animCurve = animCurve;
    this.keyDisplaySize = 6;
	this.TANGENT = { STEPPED: 0, LINEAR: 1, BEZIER: 2 };
    
    this.line = undefined;
    this.dvrt = undefined;
    this.svrt = undefined;

    //  animation curve
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( { color : animCurve.lc , linewidth : 1 } );    
    this.line = new THREE.Line( geometry, material );
    this.line.name = animCurve.name+'_curveLine'
    // this.line.animCurve = animCurve; // keep track on the parent

    //  normal, unselected keys
    var keyGeometry = new THREE.Geometry(); 
    var keyMaterial = new THREE.ParticleBasicMaterial({ size: this.keyDisplaySize, 
        color: 0x000000, sizeAttenuation: false} );                
    this.dvrt = new THREE.ParticleSystem( keyGeometry, keyMaterial );
    this.dvrt.name = animCurve.name+'_curveKeyDefault'
    // this.dvrt.animCurve = animCurve; // keep track on the parent

    //  selected keys
    var keySelectedGeometry = new THREE.Geometry(); 
    var keySelectedMaterial = new THREE.ParticleBasicMaterial( { size: this.keyDisplaySize, 
        color: 0x00FF00, sizeAttenuation: false} );            
    this.svrt = new THREE.ParticleSystem( keySelectedGeometry, keySelectedMaterial );   
    this.svrt.name = animCurve.name+'_curveKeySelected'
    // this.svrt.animCurve = animCurve; // keep track on the parent

    this.update()

    return this
};

MM.AnimCurveDisplay.prototype = {
    constructor: MM.AnimCurveDisplay,

    updateKeys: function()
    {
        // console.log('AnimCurveDisplay: updateKeys')
        this.dvrt.geometry.verticesNeedUpdate = true;
        this.svrt.geometry.verticesNeedUpdate = true;
        
        this.dvrt.geometry.vertices = [];
        this.svrt.geometry.vertices = [];

        for( var i = 0; i < this.animCurve.t.length; i++)
        {
            if(this.animCurve.s[i] === true)
            {    
                this.dvrt.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[i], this.animCurve.v[i], -1))
                this.svrt.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[i], this.animCurve.v[i], 1))
            }else{
                this.dvrt.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[i], this.animCurve.v[i], 1))
                this.svrt.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[i], this.animCurve.v[i], -1))                
            }
        }
    },
    
    updateCurve: function()
    {
        //  we should only do this when the parent object changes        
        // console.log('AnimCurveDisplay: updateCurve')

        this.line.geometry.verticesNeedUpdate = true;
        this.line.geometry.buffersNeedUpdate = true;
        this.line.geometry.vertices = [];

        for( var i = 0; i < this.animCurve.t.length; i++)
        {
            this.line.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[i], this.animCurve.v[i], 2))

            // console.log(i, ":", this.animCurve.t[i], this.animCurve.v[i])

            if(this.animCurve.ot[i] === this.TANGENT.STEPPED){            
                if(i < (this.animCurve.t.length - 1)){
                    this.line.geometry.vertices.push( new THREE.Vector3(this.animCurve.t[i+1], this.animCurve.v[i], 2))
                }
            }else if(this.animCurve.ot[i] === this.TANGENT.LINEAR){
                // pass
            }else if(this.animCurve.ot[i] === this.TANGENT.BEZIER){
                //  make sure the next key has a it of the same type
                if(i < (this.animCurve.t.length - 1))
                {
                    if( this.animCurve.ot[i+1] === this.TANGENT.BEZIER )
                    {                        
                        var p0X = this.animCurve.t[i]
                        var p1X = this.animCurve.t[i] + this.animCurve.otv[i].x
                        var p2X = this.animCurve.t[i+1] + this.animCurve.itv[i+1].x
                        var p3X = this.animCurve.t[i+1]

                        var p0Y = this.animCurve.v[i]
                        var p1Y = this.animCurve.v[i] + this.animCurve.otv[i].y
                        var p2Y = this.animCurve.v[i+1] + this.animCurve.itv[i+1].y
                        var p3Y = this.animCurve.v[i+1]
                        
                        var nVertices = 10;
                        var factor = 1.0 / nVertices;
                        var step, thisX, thisY;
                        for( var j = 1; j < nVertices; j ++){
                            step = factor * j
                            
                            thisX = THREE.Shape.Utils.b3( step, p0X, p1X, p2X, p3X);
                            thisY = THREE.Shape.Utils.b3( step, p0Y, p1Y, p2Y, p3Y);

                            // console.log(j, step, thisX, thisY)
                            this.line.geometry.vertices.push( new THREE.Vector3(thisX, thisY, 2))
                        }
                    }
                }
            }
        }
        // console.log(this.line.geometry)
    },

	update: function()
    {
        //console.log('AnimCurveDisplay: update')
        
        this.updateKeys();
        this.updateCurve();
	}
}