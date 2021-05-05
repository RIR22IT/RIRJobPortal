import React from "react";

function Header(){
    return (

    <nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#" style = {{color:"red"}}><h1>RIR</h1></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/" style = {{color:"white"}}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style = {{color:"white"}}>AboutUs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style = {{color:"white"}}>ContactUs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/reg1" style = {{color:"white"}}>SignUp</a>
      </li>
    </ul>
    </div>
    </nav>

    )
}

export default Header;