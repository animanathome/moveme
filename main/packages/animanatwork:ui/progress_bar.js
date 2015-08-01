MMUI.ProgressBar = function(title, parent, class_suffix){
    MMUI.Element.call( this )

    // If no css class suffix is defined, just use an empty string
    if(class_suffix === undefined){
        class_suffix = ''
    }

    var dom = document.createElement('div'); 
    dom.className = 'progress-dialog'+class_suffix
    
    // If we have no parent defined, then just parent it under the document
    if(parent === undefined){
        document.body.appendChild(dom)
    }else{
        parent.appendChild(dom)
    }
    
    this.dom = dom;

    var layout = new MMUI.Panel()
    layout.dom.className='progress-layout'+class_suffix
    dom.appendChild( layout.dom )    

    //  title
    var txt = new MMUI.Text(title)
    txt.dom.className='progress-title'+class_suffix
    layout.dom.appendChild( txt.dom )

    //  progress bar content
    this.contentPanel = new MMUI.Panel()
    this.contentPanel.dom.className='progress-content'+class_suffix
    layout.dom.appendChild( this.contentPanel.dom )

    //  progress bar
    //  renaming class to progress-test to ensure we do not pick up
    //  the default css configuration
    this.progressBar = new MMUI.Panel();
    this.progressBar.dom.className='progress-test'+class_suffix
    this.contentPanel.add ( this.progressBar )        

    //  progress value
    var progressTxt = '0%'
    this.progressTxt = new MMUI.Text( progressTxt )
    this.progressTxt.dom.className = 'progress-text'+class_suffix
    this.progressBar.add( this.progressTxt )

    return this
};

MMUI.ProgressBar.prototype = Object.create( MMUI.Element.prototype );

MMUI.ProgressBar.prototype.setPercentage = function(percentage){
    // console.log('ProgressBar.setPercentage', percentage)

    var offset = this.contentPanel.dom.offsetWidth / 100;
    // console.log('#\tprogress bar offset: '+offset)

    var width = offset * percentage
    // console.log('#\tnew progress bar width: '+width)
    this.progressBar.dom.style.width = width+'px'    

    this.progressTxt.setValue(percentage+'%')

    // console.log('progress bar width:', this.progressBar.dom.style.width)

    var scope = this;
    if( percentage === 100){
        setTimeout(function(){
            scope.dom.parentNode.removeChild(scope.dom)
        }, 100);       
    }
}