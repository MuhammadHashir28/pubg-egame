const featuresData = [
   
   {
    cLassName:'themePrimaryBg',
   'FeatureTitle': 'Digital Banking',
   'FeatureDesc': 'Lorem ipsum dolor sit, elit.Acque quidem eaque, totam',
   },

   {
      cLassName:'themeSecondaryBg',
      'FeatureTitle': 'Fintech',
      'FeatureDesc': 'Lorem ipsum dolor sit, elit.Acque quidem eaque, totam',
   },

   {  
      cLassName:'themeSupportBg',
      'FeatureTitle': 'Audit',
      'FeatureDesc': 'Lorem ipsum dolor sit, elit.Acque quidem eaque, totam',
   }

   
]


function Feature(){
return(


<div className="mainFeatures">
	<div className="container">
    	
        <div className="row">
        <>{featuresData.map((data,i)=>{  
        return  <div key={i} className="col-md-4 noPadding nomargin animated fadeInRight">
        	<div className={data.cLassName ? data.cLassName : ''}>
            <div className="mainFeatureBlock">
                <h1>{data.FeatureTitle}</h1>
                <p>Lorem ipsum dolor sit, elit.Acque quidem eaque, totam </p>
                <a href="/" className="btn btn-primary btn-small" data-toggle="modal" data-target="#exampleModal">Read More</a>
               </div>
        </div>
       </div>
       })}
       </>

    </div>
</div>

</div>

);

}

export default Feature