import React, { Component } from 'react';

class Footer extends Component {
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
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           

           <ul className="copyright">
              <li>&copy; All Right Reserved</li>
               
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
