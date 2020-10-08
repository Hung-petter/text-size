import React from 'react';

class Reset extends React.Component {
  onResetDefault = () => {
    this.props.onSettingDefault(true);
  };
  render() {
    return (
      <button
        type='reset'
        className='btn btn-danger'
        onClick={this.onResetDefault}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
