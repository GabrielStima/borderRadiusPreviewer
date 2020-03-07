import React, { Component } from 'react';
import '../assets/rangeControl.css'
export default class rangeControl extends Component {
  constructor(props){
    super(props);
    this.state = {
      fourValues:{
        topLeft: !!this.props.initialStates.topLeft ? this.props.initialStates.topLeft : 0,
        topRight: !!this.props.initialStates.topRight ? this.props.initialStates.topRight : 0,
        bottomRight: !!this.props.initialStates.bottomRight ? this.props.initialStates.bottomRight : 0,
        bottomLeft: !!this.props.initialStates.bottomLeft ? this.props.initialStates.bottomLeft : 0,
      },
      eightValues:{
        topLeftHorizontal: !!this.props.initialStates.topLeftHorizontal ? this.props.initialStates.topLeftHorizontal : 0,
        topLeftVertical: !!this.props.initialStates.topLeftVertical ? this.props.initialStates.topLeftVertical : 0,
        topRightHorizontal: !!this.props.initialStates.topRightHorizontal ? this.props.initialStates.topRightHorizontal : 0,
        topRightVertical: !!this.props.initialStates.topRightVertical ? this.props.initialStates.topRightVertical : 0,
        bottomRightHorizontal: !!this.props.initialStates.bottomRightHorizontal ? this.props.initialStates.bottomRightHorizontal : 0,
        bottomRightVertical: !!this.props.initialStates.bottomRightVertical ? this.props.initialStates.bottomRightVertical : 0,
        bottomLeftHorizontal: !!this.props.initialStates.bottomLeftHorizontal ? this.props.initialStates.bottomLeftHorizontal : 0,
        bottomLeftVertical: !!this.props.initialStates.bottomLeftVertical ? this.props.initialStates.bottomLeftVertical : 0,
      }
    }
    this.setNewValue = this.setNewValue.bind(this)
  }

  setNewValue(key, value){ 
    if(this.props.type === 'four'){
      let fourValues = this.state.fourValues;
      switch (true) {
        case key === 'top-left':
          fourValues.topLeft = value
          this.setState({fourValues}, ()=>this.props.callbackParent(this.state.fourValues))
          break;
        case key === 'top-right':
          fourValues.topRight = value
          this.setState({fourValues}, ()=>this.props.callbackParent(this.state.fourValues))
          break;
        case key === 'bottom-right':
          fourValues.bottomRight = value
          this.setState({fourValues}, ()=>this.props.callbackParent(this.state.fourValues))
          break;
        case key === 'bottom-left':
          fourValues.bottomLeft = value
          this.setState({fourValues}, ()=>this.props.callbackParent(this.state.fourValues))
          break;
        default:
          console.error('unexpected error')
          break;
      }
    }else{
      let eightValues = this.state.eightValues;
      switch (true) {
        case key === 'top-left-horizontal':
          eightValues.topLeftHorizontal = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'top-left-vertical':
          eightValues.topLeftVertical = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'top-right-horizontal':
          eightValues.topRightHorizontal = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'top-right-vertical':
          eightValues.topRightVertical = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'bottom-right-horizontal':
          eightValues.bottomRightHorizontal = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'bottom-right-vertical':
          eightValues.bottomRightVertical = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'bottom-left-horizontal':
          eightValues.bottomLeftHorizontal = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        case key === 'bottom-left-vertical':
          eightValues.bottomLeftVertical = value
          this.setState({eightValues}, ()=>this.props.callbackParent(this.state.eightValues))
          break;
        default:
          console.error('unexpected error')
          break;
      }
    }
  }

  fourForm = () =>{
    return (
      <>
        <label htmlFor="top-left">top-left</label>
        <input type="range" id="top-left" min="0" max="100" value={this.state.fourValues.topLeft} onChange={(e) => this.setNewValue('top-left', e.target.value)}/>
        <label htmlFor="top-right">top-right</label>
        <input type="range" id="top-right" min="0" max="100" value={this.state.fourValues.topRight} onChange={(e) => this.setNewValue('top-right', e.target.value)}/>
        <label htmlFor="bottom-right">bottom-right</label>
        <input type="range" id="bottom-right" min="0" max="100" value={this.state.fourValues.bottomRight} onChange={(e) => this.setNewValue('bottom-right', e.target.value)}/>
        <label htmlFor="bottom-left">bottom-left</label>
        <input type="range" id="bottom-left" min="0" max="100" value={this.state.fourValues.bottomLeft} onChange={(e) => this.setNewValue('bottom-left', e.target.value)}/>
      </>
    )
  };

  eightForm = () =>{
    return (
      <>
          <label htmlFor="top-left-horizontal">top-left-horizontal</label>
          <input type="range" id="top-left-horizontal" min="0" max="100" value={this.state.eightValues.topLeftHorizontal} onChange={(e) => this.setNewValue('top-left-horizontal', e.target.value)}/>
          <label htmlFor="top-right-horizontal">top-right-horizontal</label>
          <input type="range" id="top-right-horizontal" min="0" max="100" value={this.state.eightValues.topRightHorizontal} onChange={(e) => this.setNewValue('top-right-horizontal', e.target.value)}/>
          <label htmlFor="bottom-left-horizontal">bottom-left-horizontal</label>
          <input type="range" id="bottom-left-horizontal" min="0" max="100" value={this.state.eightValues.bottomLeftHorizontal} onChange={(e) => this.setNewValue('bottom-left-horizontal', e.target.value)}/>
          <label htmlFor="bottom-right-horizontal">bottom-right-horizontal</label>
          <input type="range" id="bottom-right-horizontal" min="0" max="100" value={this.state.eightValues.bottomRightHorizontal} onChange={(e) => this.setNewValue('bottom-right-horizontal', e.target.value)}/>
          <label htmlFor="top-left-vertical">top-left-vertical</label>
          <input type="range" id="top-left-vertical" min="0" max="100" value={this.state.eightValues.topLeftVertical} onChange={(e) => this.setNewValue('top-left-vertical', e.target.value)}/>
          <label htmlFor="top-right-vertical">top-right-vertical</label>
          <input type="range" id="top-right-vertical" min="0" max="100" value={this.state.eightValues.topRightVertical} onChange={(e) => this.setNewValue('top-right-vertical', e.target.value)}/>
          <label htmlFor="bottom-left-vertical">bottom-left-vertical</label>
          <input type="range" id="bottom-left-vertical" min="0" max="100" value={this.state.eightValues.bottomLeftVertical} onChange={(e) => this.setNewValue('bottom-left-vertical', e.target.value)}/>
          <label htmlFor="bottom-right-vertical">bottom-right-vertical</label>
          <input type="range" id="bottom-right-vertical" min="0" max="100" value={this.state.eightValues.bottomRightVertical} onChange={(e) => this.setNewValue('bottom-right-vertical', e.target.value)}/>
      </>
    )
  };

  render() {
    return (
      <div className="range-control">
          {this.props.type === 'four' ? (
            <>
              {this.fourForm()}
            </>
          ) : (
            <>
              {this.eightForm()}
            </>
          ) }
      </div>
    );
  }
}
