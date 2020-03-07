import React, { Component } from 'react';
import RangeControl from './rangeControl';
import FooterControl from './footerControl';
import '../assets/eightValues.css';

export default class eightValues extends Component {
    constructor(){
        super();
        this.state = {
            topLeftHorizontal: 5,
            topLeftVertical: 5,
            topRightHorizontal: 5,
            topRightVertical: 5,
            bottomRightHorizontal: 5,
            bottomRightVertical: 5,
            bottomLeftHorizontal: 5,
            bottomLeftVertical: 5,
        }
        this.getPropsFooterControl = this.getPropsFooterControl.bind(this);
        this.onRangeChanged = this.onRangeChanged.bind(this);
    }
    getPropsFooterControl(){
        return {
            type:'eight',
            values:{
                topLeftHorizontal: `${this.state.topLeftHorizontal}%`,
                topLeftVertical: `${this.state.topLeftVertical}%`,
                topRightHorizontal: `${this.state.topRightHorizontal}%`,
                topRightVertical: `${this.state.topRightVertical}%`,
                bottomRightHorizontal: `${this.state.bottomRightHorizontal}%`,
                bottomRightVertical: `${this.state.bottomRightVertical}%`,
                bottomLeftHorizontal: `${this.state.bottomLeftHorizontal}%`,
                bottomLeftVertical: `${this.state.bottomLeftVertical}%`,
             }
        }
    }

    onRangeChanged(states) {
        this.setState({
            topLeftHorizontal: states.topLeftHorizontal,
            topLeftVertical: states.topLeftVertical,
            topRightHorizontal: states.topRightHorizontal,
            topRightVertical: states.topRightVertical,
            bottomRightHorizontal: states.bottomRightHorizontal,
            bottomRightVertical: states.bottomRightVertical,
            bottomLeftHorizontal: states.bottomLeftHorizontal,
            bottomLeftVertical: states.bottomLeftVertical,
        });
      }
      
    render() {
        return (
            <div className='eight-control'>
                <RangeControl initialStates={this.state} type='eight' callbackParent={(states) => this.onRangeChanged(states)}/>
                <div className='eight-control-body'>
                    <div id='eightControlSquare' className='eight-control-square' style={{borderRadius: `${this.state.topLeftHorizontal}% ${this.state.topRightHorizontal}% ${this.state.bottomRightHorizontal}% ${this.state.bottomLeftHorizontal}% / ${this.state.topLeftVertical}% ${this.state.topRightVertical}% ${this.state.bottomRightVertical}% ${this.state.bottomLeftVertical}%`}}/>
                    <FooterControl {...this.getPropsFooterControl()}/>
                </div>
            </div>
        );
    }
}
