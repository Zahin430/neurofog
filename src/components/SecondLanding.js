import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import participation from './img/participation_2.jpeg'


export default class SecondLanding extends Component {
  render() {
    let items = {
      "card": [
        {
          "image" : "teamsmall.jpg",
          "link" : "Our Team",
          "route": "/team",
          "desc": "View our current and past members of the Neuro Fog Laboratory.",
          // "height": "100%"

        },
        {
          "image" : "researchMain.jpg",
          "link" : "Our Research",
          "route": "/research",
          "desc": "Take a look at what research goes on in our laboratory.",
          // "height": "100%"
        },
        {
          "image" : "participation_2.jpeg",
          "link" : "Become a Participant",
          "route": "/involved",
          "desc": "Interested in participting in studies? Click to find out more!",
          // "height": "100%"
        }

      ]
    }
    return (
      <div className="card-deck" style={{ padding: '5%', width: '100%', height: '100%' }}>
      {
        items.card.map((item) => {
          return (
            <div className="card shadow bg-white rounded" id="card1">
            <img className="card-img-top landing-card" src={require(`./img/${item.image}`)} style = {{height: item.height}} alt="Card1" />
            <div className="card-body">
              <h5 className="card-title">
                <Link className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} to= {item.route}>{item.link}</Link>
              </h5>
              <p className="card-text">{item.desc}</p>
            </div>
          </div>
          )
        })
      }
      

        </div>
        )
  }

}

