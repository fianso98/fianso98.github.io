import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    
    const PR=[
      {
        "title": "WhatsApp Clone",
        "category": "WhatsApp Clone built with ReactJs & firebase",
        "image": "Whatsup.PNG",
        "url": "https://whatsapp-clone-27c5c.web.app/"
      },
      {
        "title": "Amazon Clone",
        "category": "Amazon Clone built with with ReactJs & firebase",
        "image": "Amazone.PNG",
        "url": "https://clone-224d0.web.app/"
      },
      {
        "title": "Airbnb Clone",
        "category": "Airbnb Clone built with ReactJS",
        "image": "airbnb-clone.jpeg",
        "url": "https://airbnb-clone-cdfd8.web.app/"
      },
      {
        "title": "a SAAS broker java app",
        "category": "A java application to choose the best supplier depending of some contraints",
        "image": "java.PNG",
        "url": "https://github.com/fianso98/SAAS_APP_BROKER"
      }
    ]
    var projects = PR.map(function(projects){
      var projectImage = 'images/portfolio/'+projects.image;
      return <div key={projects.title} className="columns portfolio-item">
         <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
             <img alt={projects.title} src={projectImage} />
             <div className="overlay">
                <div className="portfolio-item-meta">
               <h5>{projects.title}</h5>
                   <p>{projects.category}</p>
                </div>
              </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </div>
    })
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
