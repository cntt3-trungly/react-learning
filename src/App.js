import React, { Component } from 'react';
import './App.css';
import { noteData } from './firebaseConnect'
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
export default class App extends Component {
  // pushData =()=>{
  //   var connectData = firebase.database().ref('dataForNote');
  //   connectData.push({
  //     title:"ghi chu so 3",
  //     content:"noi dung ghi chu so 3 "
  //   })
  //   console.log('ban vua them du lieu');

  // }
  // deleteData =(id)=>{
  //   var connectData = firebase.database().ref('dataForNote');
  //   connectData.child(id).remove();

  //   console.log('ban vua xoa du lieu');
    
  addData =(item) =>{
    noteData.push(item);
  }

   render() {
  //  noteData.once('value').then(function(snapshot){
  //       console.log(snapshot.val());
        
  //   });
    return (

      <div>
        <Nav />
        <div className="container mt-5">
          <div className="row">
          <NoteList />
          <NoteForm getData={(item)=>this.addData(item)}/>
          </div>
        </div>
      </div>
    )
  }
}

