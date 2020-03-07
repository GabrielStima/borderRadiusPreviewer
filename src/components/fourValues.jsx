import React, { Component } from 'react';
import FooterControl from './footerControl';
import RangeControl from './rangeControl';
import '../assets/fourValues.css';

export default class fourValues extends Component {
    constructor(){
        super();
        this.state = {
          topLeft: 5,
          topRight: 5,
          bottomRight: 5,
          bottomLeft: 5,
        }
        this.getPropsFooterControl = this.getPropsFooterControl.bind(this);
        this.onRangeChanged = this.onRangeChanged.bind(this);
    }

    getPropsFooterControl(){
        return {
            type:'four',
            values:{
              topLeft: `${this.state.topLeft}%`,
              topRight: `${this.state.topRight}%`,
              bottomRight: `${this.state.bottomRight}%`,
              bottomLeft: `${this.state.bottomLeft}%`,
            }
        }
    }
    
    onRangeChanged(states) {
      this.setState({
        topLeft: states.topLeft,
        topRight: states.topRight,
        bottomRight: states.bottomRight,
        bottomLeft: states.bottomLeft,
      });
    }

    render() {
        return (
          <div className='four-control'>
            <RangeControl initialStates={this.state} type='four' callbackParent={(states) => this.onRangeChanged(states)}/>
            <div className='four-control-body'>
                <div id='fourControlSquare' className='four-control-square' style={{borderRadius:`${this.state.topLeft}% ${this.state.topRight}% ${this.state.bottomRight}% ${this.state.bottomLeft}%`}}/>
                <FooterControl {...this.getPropsFooterControl()}/>
            </div>
          </div>
        );
    }
}
