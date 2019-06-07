import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        subject: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            subject: this.state.subject
        }
        
        // axios.post('API_URI', data)
        // .then( res => {
        //     this.setState({ sent: true }, this.resetForm())
        // })
        // .catch( () => {
        //   console.log('Message not sent')
        // })

        console.log(data);
      }
      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            subject: '',
            buttonText: 'Message Sent'
        })
    }


    render() {
        return(
        <div className="row">
            <div className="col md-6" style={{paddingTop: '10%'}}>
            Want to work with us? Volunteer? Participate in our studies? Ask us more about what we do? 
            <br/>
            Use the contact form to the right or send an e-mail. We would love to hear from you.
            </div>
            <div className="col md-6">
            <div class="card" style={{padding: "2%", width: '80%'}}>

                <form onSubmit={ (e) => this.formSubmit(e)}>
                <div class="form-row">
                    <div className="form-group col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10767.27689996!2d-52.7327106!3d47.5713056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c215e1fbd97e8b4!2sNeurofog+laboratory!5e0!3m2!1sen!2sca!4v1559933505838!5m2!1sen!2sca" width="400" height="250" frameborder="0" style={{border:"0"}} allowfullscreen title="map"></iframe>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="input">Name</label>
                        <input onChange={e => this.setState({ name: e.target.value })} name="name" class="form-control" type="text" placeholder="Your Name" value={this.state.name} required/>
                    </div>

                    <div class="form-group col-md-12">
                        <label for="input">Email</label>
                        <input onChange={(e) => this.setState({ email: e.target.value })} name="email" class="form-control" type="email" placeholder="Email"  value={this.state.email} required/>
                    </div>

                    <div class="form-group col-md-12">
                        <label for="input">Subject</label>
                        <input onChange={e => this.setState({ subject: e.target.value })} name="subject" class="form-control" type="text" placeholder="Subject" value={this.state.subject} />
                    </div>

                    <div class="form-group col-md-12">
                        <label for="input">Message</label>
                        <textarea onChange={e => this.setState({ message: e.target.value})} rows= "5" name="message" class="form-control" type="text" placeholder="Please write your message here" value={this.state.message} required/>
                    </div>

                </div>

                <button type="submit" class="btn btn-primary">{ this.state.buttonText }</button>
                </form>
                            
                </div>
            </div>
        </div>
       

        );
    }
}   
export default Contact;

 