import React from 'react';
import About from '../../assets/images/biophoto.jpg'
function Home(){



    return <div>
    <br></br>
    <div role= "main" className= "container mb-5 p-1">
        <div className= "container p-4 contentbackground myborder mx-sm-auto">
            <div className= "row d-flex align-content-center">
                <div className= "col-md-12">
                    <h1 className= "border-bottom mx-auto">About Me</h1>
                </div>
            </div>
            <div className= "container">
                <div className= "row p-3">  
                    <div className= "col">
                    <img className= "img-fluid" src={About}></img> 
                    
                    </div>
                        <div className= "col-md-9">
                    <p>Hello, my name is Dillon Turner I am a new developer who is ready to begin work at a company that will present me with unique challenges.
                       </p>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="row p-3">
                    <div className= "col-md-4 ml-5 float-right"><div className="card h-100 mr-5" >
                        <div className="card-body">
                          <h5 className="card-title">github profile</h5>
                          <p className="card-text">Check me out on github!!</p>
                          <a href="https://github.com/DillTurner" className="card-link"><img className="img-fluid" src= "https://github.githubassets.com/images/modules/logos_page/Octocat.png" style={{maxHeight: 100, maxWidth: 100}}></img></a>
                        </div>
                      </div></div>
                    
                    <div className= "col-md-4 ml-5 float-left"><div className="card mr-5" >
                        <div className="card-body">
                          <h5 className="card-title">Linked Resume</h5>
                          <p className="card-text">Check out my short but amazing resume</p>
                          <a href="" className="card-link"></a>
                        </div>
                      </div></div>
                        
                </div>
            
            </div>
    </div>
</div>
}


export default Home;