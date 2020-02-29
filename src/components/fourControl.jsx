import React, { Component } from 'react';
import FooterControl from './footerControl';
import '../assets/fourControl.css';

export default class fourControl extends Component {
    constructor(){
        super();
        this.state = {
            value1: '0%',
            value2: '0%',
            value3: '0%',
            value4: '0%',
            value5: '0%',
            value6: '0%',
            value7: '0%',
            value8: '0%',
        }
        this.getPropsFooterControl = this.getPropsFooterControl.bind(this);
    }
    getPropsFooterControl(){
        return {
           value1: this.state.value1,
           value2: this.state.value2,
           value3: this.state.value3,
           value4: this.state.value4,
           value5: this.state.value5,
           value6: this.state.value6,
           value7: this.state.value7,
           value8: this.state.value8,
        }
    }
    render() {
        return (
            <div className='four-control-body'>
                <div id='fourControlSquare' className='four-control-square'>
                    
                </div>
                <FooterControl {...this.getPropsFooterControl()}/>
            </div>
        );
    }
}
