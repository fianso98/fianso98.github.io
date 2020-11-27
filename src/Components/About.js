import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={"images/PIC.PNG"} alt="Fianso Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>My name is Sofiane, I'm a Full Stack Developer. Currently I’m learning everything 🤣, trying to contribute more to Open Source projects</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Afir Sofiane</span><br />
						   <span>1074 city<br />
                     Ain naadja Alger, 16064
                   </span><br />
						   <span>+213 67 478 3038</span><br />
                     <span>sofiane_afir@live.fr</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://github.com/fianso98" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
