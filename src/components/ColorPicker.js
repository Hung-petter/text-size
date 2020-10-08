import React from 'react';
class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', '#ccc']
    };
  }
  showColor(color) {
    return {
      backgroundColor: color
    };
  }
  setActiveColor(color) {
    this.props.onReceiveColor(color);
    console.log(color);
  }
  render() {
    const elmColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? 'active' : ' '}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <div className='col-xs-12 col-sm-6'>
        <div className='panel panel-primary'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Color Picker</h3>
          </div>
          <div className='panel-body'>
            {elmColors}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default ColorPicker;