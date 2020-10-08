import React from 'react';

class Result extends React.Component {
  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  }
  render() {
    return (
      <div className='col-xs-12'>
        <p>
          Color: {this.props.color} - Fontsize : {this.props.fontSize}px
        </p>
        <textarea
          id='content'
          className='form-control'
          rows='5'
          style={this.setStyle()}
        >
          Noi dung
        </textarea>
      </div>
    );
  }
}

export default Result;
