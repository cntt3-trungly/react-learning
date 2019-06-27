import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { connect } from 'react-redux'

class App extends Component {
  
  showForm =() =>{
    if(this.props.isEdit)
    {
      return (
        <NoteForm/>
      )
    }
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="container mt-5">
          <div className="row">
            <NoteList />
            {
              this.showForm()
            }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


export default connect(mapStateToProps)(App)


