import React from 'react';


const Navbar = (props) => {

    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">Clicky</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" >Top Score: {props.topScore} </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" > Score: {props.score}</a>
            </li>
        
          </ul>
     
        </div>
      </nav>
    )

}

export default Navbar