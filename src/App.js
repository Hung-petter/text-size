import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingDefault = this.onSettingDefault.bind(this);
  }
  onSetColor(params) {
    this.setState({
      color: params
    });
    console.log(params);
  }
  onChangeSize(value) {
    // 8 <= value <= 36
    if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
    console.log(value);
  }
  onSettingDefault(value) {
    if (value === true) {
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='container-fluid mt-50'>
          <div className='row'>
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />
            <div className='col-xs-12 col-sm-6'>
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
              />
              <Reset onSettingDefault={this.onSettingDefault} />
            </div>
            <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
