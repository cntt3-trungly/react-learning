import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
class App extends Component {

  render() {

    return (
      <div>
        <Nav />
        <div className="container mt-5">
          <div className="row">
            <NoteList />
          </div>
        </div>
      </div>
    )
  }
}

export default App


