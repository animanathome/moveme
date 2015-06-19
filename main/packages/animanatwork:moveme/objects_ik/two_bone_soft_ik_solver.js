MM.TwoBoneSoftIkSolver=function(){
	MM.TwoBoneIkSolver.call(this);

	//	initial length
	this.initA = 1.0;
	this.initB = 1.0;
	this.inputMatrix_ROOT = undefined;
	this.inputMatrix_CTL = undefined;	

	this.softControl = undefined;
	
	this.stretchAxis = 'y';
}

MM.TwoBoneSoftIkSolver.prototype=Object.create(MM.TwoBoneIkSolver.prototype);

MM.TwoBoneSoftIkSolver.prototype.exportData = function(){
    var data = MM.TwoBoneIkSolver.prototype.exportData.call(this);
    data.type = 'TwoBoneSoftIkSolver'
    return data
}

MM.TwoBoneSoftIkSolver.prototype.importSetup = function(scene, data){
	console.log('TwoBoneSoftIkSolver.importSetup', data)

    MM.TwoBoneIkSolver.prototype.importSetup.call(this, scene, data);

    this.initA = data.initA;
    this.initB = data.initB;
	
	this.inputMatrix_CTL = this.matrixWorld;
	this.inputMatrix_ROOT = this.startJoint.matrixWorld;

    this.softControl = scene.getObjectByName(data.softControl, true);
    this.stretchAxis = data.stretchAxis;
}

MM.TwoBoneSoftIkSolver.prototype.exportSetup = function(){
	console.log('TwoBoneSoftIkSolver.exportSetup', this.name)

    var data = MM.TwoBoneIkSolver.prototype.exportSetup.call(this);

    data.type = 'TwoBoneSoftIkSolver';

    data.initA = this.initA
    data.initB = this.initB

    data.softControl = this.softControl.name
    data.stretchAxis = this.stretchAxis;

    return data;
}

MM.TwoBoneSoftIkSolver.prototype.setSoftControl=function(control){
	//	pass on the control that we want to user to interface with to control or drive our soft ik behaviour
	
	this.softControl = control;

	this.softControl.addChannel( 'custom', 'useSoft', [], 'boolean')
    this.softControl.addChannel( 'custom', 'globalScale', [0.1, 2.0])
    this.softControl.addChannel( 'custom', 'scaleBone1', [0.01, 5.0])
    this.softControl.addChannel( 'custom', 'scaleBone2', [0.01, 5.0])
    this.softControl.addChannel( 'custom', 'stretch', [0.01, 5.0])
    this.softControl.addChannel( 'custom', 'soft', [0.0, 1.0])
    this.softControl.addChannel( 'custom', 'slide', [0.0, 1.0])

    if(!this.softControl.hasOwnProperty('custom')){
    	this.softControl.custom = {};
    }

    _.extend(this.softControl.custom, {
	    	'useSoft': true,
	    	'globalScale' : 1.0 , 
	    	'scaleBone1' : 1.0 , 
	    	'scaleBone2' : 1.0 , 
	    	'stretch': 1.0 , 
			'soft': 0.0, 
			'slide' : 0.5, 
	    });
}

MM.TwoBoneSoftIkSolver.prototype.setSoftIk=function(){
	// console.log('TwoBoneSoftIkSolver.setSoftIk')

	this.inputMatrix_CTL = this.matrixWorld;
	this.inputMatrix_ROOT = this.startJoint.matrixWorld;
	
	// console.log('\tctl', this.inputMatrix_CTL)
	// console.log('\troot', this.inputMatrix_ROOT)
	
	this.initA = this.middleJoint.position[this.stretchAxis]
	this.initB = this.endJoint.position[this.stretchAxis]

	// console.log('\tinitA', this.initA)
	// console.log('\tinitB', this.initB)	
}

MM.TwoBoneSoftIkSolver.prototype.solveSoftIk=function(){
	// console.log('\t--------------------------------------')
	// console.log('TwoBoneSoftIkSolver.solveSoftIk')

	// console.log('\tctl', this.inputMatrix_CTL)
	// console.log('\troot', this.inputMatrix_ROOT)

	if(this.inputMatrix_ROOT === undefined){
		console.log('TwoBoneSoftIkSolver: no root matrix defined.')
		return;
	}
	if(this.inputMatrix_CTL === undefined){
		console.log('TwoBoneSoftIkSolver: no handle matrix defined.')
		return;
	}
	if(this.softControl === undefined){
		console.log('TwoBoneSoftIkSolver: no control defined.')
		return;
	}

	this.globalScale=this.softControl.custom['globalScale'];
	this.stretch=this.softControl.custom['stretch'];
	this.soft=this.softControl.custom['soft'];
	this.slide=this.softControl.custom['slide'];	
	this.scaleJnt1=this.softControl.custom['scaleBone1']
	this.scaleJnt2=this.softControl.custom['scaleBone2']


	// console.log('#\tsolver', this)

	// console.log('\tcustom', this.custom)

	var inputROOTV = new THREE.Vector3().getPositionFromMatrix(this.inputMatrix_ROOT);
	var inputCTLV = new THREE.Vector3().getPositionFromMatrix(this.inputMatrix_CTL);
	// console.log('\troot', inputROOTV.x, inputROOTV.y, inputROOTV.z)
	// console.log('\tctl', inputCTLV.x, inputCTLV.y, inputCTLV.z)
	
	// this.scaleJnt1 = 1;//Math.abs(this.middleJoint.position[this.stretchAxis]);
	// this.scaleJnt2 = 1;//Math.abs(this.endJoint.position[this.stretchAxis]);

	var scaleA=(this.slide+0.5)*this.scaleJnt1;
	var scaleB=((1-this.slide)+0.5)*this.scaleJnt2;

	// console.log('\tscaleA', scaleA)
	// console.log('\tscaleB', scaleB)

	var chainLen_F=Math.abs((this.initA*scaleA+this.initB*scaleB)*this.globalScale);

	// console.log('\tchainlen', chainLen_F)

	var diffpos=new THREE.Vector3().subVectors(inputROOTV, inputCTLV);	
	var curlen=Math.abs(diffpos.length());

	// console.log('\tdiffpos', diffpos)
	// console.log('\tcurlen', curlen)

	var soft_F=this.soft*(Math.abs(this.initA+this.initB)/20*this.globalScale);

	// console.log('\tsoft', soft_F)

	var diff=curlen-(chainLen_F-soft_F);
	// console.log('\tdiff', diff)
	
	var shortdSLIDER=1.0;
	var daSLIDER=chainLen_F-soft_F;
	// console.log('\tdaslider', daSLIDER)

	var result_V;
	if(diff>0)
	{
		diffpos.multiplyScalar(1/curlen);
		var sliderResult=soft_F*(1-Math.exp(-1*(curlen-daSLIDER)/soft_F))+daSLIDER;

		diffpos.multiplyScalar(sliderResult);
		result_V=new THREE.Vector3().addVectors(diffpos, inputROOTV);
		

		//slide according to the stretch attr
		// result_V=result_V*(1-stretch_F) + inputCTLV*stretch_F;

		var a = result_V.multiplyScalar(1-this.stretch)
		var b = inputCTLV.multiplyScalar(this.stretch)
		var c = new THREE.Vector3().addVectors(a, b);

		result_V = c;
	}
	else//con dition not met, go with the control
	{
		result_V=inputCTLV;
	}	
	// console.log('\tresult', result_V.x, result_V.y, result_V.z)

	var dist = new THREE.Vector3().subVectors(inputROOTV, result_V).length();

	// console.log('\tdistance to root', dist)

	var softNew_F=this.stretch*soft_F;

	// console.log('\tnew soft', softNew_F)

	var da=chainLen_F-softNew_F;

	// console.log('\tda', da)
	var finalScale=1.0;
	var shotd=1.0;

	// console.log('\tstretch', this.stretch)

	if(dist>da && this.stretch>0){
		var shortd = softNew_F*(1-Math.exp(-1*(dist-da)/softNew_F))+da;
		finalScale=dist/shortd;
	}else{
		finalScale=1;
	}

	// console.log('\tfinal scale', finalScale)

	var outScale1=(finalScale*scaleA);
	var outScale2=(finalScale*scaleB);
	
	// console.log('\tscale1', outScale1)
	// console.log('\tscale2', outScale2)

	//	set value here... still need to determine if value is pos or neg
	this.middleJoint.position[this.stretchAxis]=(finalScale*scaleA)*this.initA;
	this.endJoint.position[this.stretchAxis]=(finalScale*scaleB)*this.initB;

	this.handlePos = result_V;
}

MM.TwoBoneSoftIkSolver.prototype.updateMatrixWorld=function(force){	
    
    this.customHandlePos=false;
    if(this.softControl !== undefined ){
	    if(this.softControl.custom['useSoft']){
	    	this.customHandlePos=true;
			this.solveSoftIk();
	    // }else{
	    // 	console.log('No soft to calculate', this.softControl.custom['useSoft'])
	    }
	}else{
		console.log('No soft ik control is defined. Nothing to calculate.')
	}

	MM.TwoBoneIkSolver.prototype.updateMatrixWorld.call(this, force);
}