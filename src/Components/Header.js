import React, { Component } from 'react';
class Header extends Component {
  render() {

    
    const NT=[
      {
        "name": "facebook",
        "url": "https://www.facebook.com/fian98so",
        "className": "fa fa-facebook"
      },
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/in/sofiane-afir-26a037185/",
        "className": "fa fa-linkedin"
      },
      {
        "name": "instagram",
        "url": "https://www.instagram.com/sofiane_afir/",
        "className": "fa fa-instagram"
      },
      {
        "name": "github",
        "url": "http://github.com/fianso98",
        "className": "fa fa-github"
      }
    ]
    var networks= NT.map(function(network){
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li className="current"><a className="smoothscroll" href="#about">About</a></li>
	         <li className="current"><a className="smoothscroll" href="#resume">Resume</a></li>
            <li className="current"><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li className="current"><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li className="current"><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Afir Sofiane.</h1>
            <h3>I'm an Algerian <span>Junior web Developer</span>. Full Stack Developer by Day.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
 
}


export default Header;
