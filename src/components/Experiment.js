import React, { Component } from 'react';
import Page from './experiments/visualltm.html';
var htmlDoc = {__html: Page};

export default class Experiment extends Component {
  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)
}}