import React, { Component } from 'react';
import News from './News';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.dulieu}
        <News/>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dulieu : state.num
  }
}

export default connect(mapStateToProps)(App);
