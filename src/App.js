import React,{Component} from 'react';
import './App.css';
import {firebaseConnect} from './firebaseConnect'
import * as firebase from 'firebase';
export default class App extends Component {
  pushData =()=>{
    var connectData = firebase.database().ref('dataForNote');
    connectData.push({
      title:"ghi chu so 3",
      content:"noi dung ghi chu so 3 "
    })
    console.log('ban vua them du lieu');
    
  }
  render() {
    console.log(firebaseConnect);
    return (
      <div>
        <button onClick={()=>this.pushData()}>Click</button>
      </div>
    )
  }
}

