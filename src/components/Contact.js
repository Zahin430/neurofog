import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import experimet from '../experiments/visualltm.html'

export default class Contact extends Component {
    state = {
    name: '',
    email: '',
    feedback: '',
    subject : '',
    buttonText: 'Send Message',
    formSubmitted: false
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleEmail = this.handleEmail.bind(this);
  handleName = this.handleName.bind(this);
  handleSubject = this.handleSubject.bind(this);

  //  static sender = 'sender@example.com';
 
    handleCancel() {
        this.setState({       
        feedback: '',
        name: '',
        subject: '',
        email: '',
        });
    }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    // Helper functions to get the value
    handleName(event) {
        this.setState({
            name: event.target.value
        });
        }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleSubject(event) {
        this.setState({
            subject: event.target.value
        });
    }


    handleChange(event) {
        this.setState({
        feedback: event.target.value,
        });
    }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    
    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback,
      this.state.subject,
      this.state.name,
      this.state.email
    );


    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback,subject, name, email) {
    window.emailjs
      .send('mailgun', templateId, {
        senderEmail,
        receiverEmail,
        feedback,
        subject,
        name,
        email
      })
      .then(res => {
        this.setState({
            formEmailSent: true,
            name: '',
            feedback: '',
            email: '',
            subject: ''
        });
      })
      // Handle errors here
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
        <div className = "container">
                <div className="row">
                    <div id = "social-row" className="col md-6" style={{paddingTop: '5%', fontSize: "120%"}}>
                    Want to work with us? Volunteer? Participate in our studies? Ask us more about what we do? 
                    <br/>
                    Use the contact form to the right or send an e-mail. We would love to hear from you.

                    <br/>

                    <br/>
                    <h3 style = {{  }}>Get In Touch</h3>
                    <hr/>
                    
                    <i class="fab fa-facebook" style = {{color: "#3b5998",  padding: "2px", fontSize: "30px"}}></i>
                    <span style ={{ letterSpacing: "1px", paddingLeft: ".4em"}}> <a href = "https://www.facebook.com/NeuroFog" target= "_blank"  rel="noopener noreferrer">Neuro Fog Laboratory</a></span>
                    <hr/>
                    <i class="fas fa-home" style = {{fontSize: "28px", padding: "2px", color: "green"}}></i> <span style ={{ letterSpacing: "1px", paddingLeft: ".4em"}}>230 Elizabeth Ave. St. John's, Newfoundland</span> <br/> <hr/>
                    <i class="fas fa-phone" style = {{fontSize: "28px", padding: "2px", color: "brown"}}></i> <span style ={{ letterSpacing: "1px", paddingLeft: ".4em"}}>+1 709 864 8020</span>  <br/> <hr/>
                    <i class="fas fa-envelope" style = {{fontSize: "28px", padding: "2px", color: "red"}}></i> <span style ={{ letterSpacing: "1px", paddingLeft: ".4em"}}><a href="mailto:neurofog@mun.ca" target="_blank"  rel="noopener noreferrer">neurofog@mun.ca</a></span>

                    
                    </div>

                 
                    
                    <div className="col md-6">
                    <div id = "contact-card" class="card" style={{padding: "2%", width: '100%', height: '99.2%'}}>

                        <form onSubmit={this.handleSubmit} id = "contact-form">
                        <div class="form-row">
                            <div className="form-group col-md-12" align="center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.8192260600094!2d-52.73489928447622!3d47.57130557918235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca38fd1eaaaab%3A0x9c215e1fbd97e8b4!2sNeurofog+laboratory!5e0!3m2!1sen!2sca!4v1562885657603!5m2!1sen!2sca" width="400" height="250" frameborder="0" style={{border:"0"}} allowfullscreen title = "map"></iframe>
                            </div>
                            <div class="form-group col-md-12">
                                <label for="input">Name</label>
                                <input 
                                    onChange={this.handleName} 
                                    name="name" 
                                    class="form-control" 
                                    type="text" 
                                    placeholder="Your Name" 
                                    value={this.state.name} 
                                    required/>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="input">Email</label>
                                <input 
                                    onChange={this.handleEmail}
                                    name="email" 
                                    class="form-control" 
                                    type="email" 
                                    placeholder="Email"  
                                    value={this.state.email}
                                    required/>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="input">Subject</label>
                                <input 
                                    onChange={this.handleSubject} 
                                    name="subject" 
                                    class="form-control" 
                                    type="text" 
                                    placeholder="Subject" 
                                    value={this.state.subject} />
                            </div>

                            <div class="form-group col-md-12">
                                <label for="input">Message</label>
                                <textarea 
                                    onChange={this.handleChange}
                                    rows= "5" 
                                    name="message" 
                                    class="form-control" 
                                    type="text" 
                                    placeholder="Please write your message here" 
                                    value={this.state.feedback} 
                                    required/>
                            </div>

                        </div>

                        <button type="submit"  class="btn btn-primary">{ this.state.buttonText }</button>
                        </form>
                                    
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

Contact.propTypes = {
  env: PropTypes.object.isRequired
};