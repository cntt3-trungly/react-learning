import * as firebase from 'firebase';
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDE7LEjflOms78ARW2XZuZfAbCvEIKGuBw",
    authDomain: "notereactfedu-54730.firebaseapp.com",
    databaseURL: "https://notereactfedu-54730.firebaseio.com",
    projectId: "notereactfedu-54730",
    storageBucket: "",
    messagingSenderId: "923870426890",
    appId: "1:923870426890:web:d434d672d5b0a2f8"
  };
  // Initialize Firebase


 export const firebaseConnect =  firebase.initializeApp(firebaseConfig);

 var data = firebase.database().ref('dataForNote/node2');
    // data.once('value').then(function(snapshot){
    //     console.log(snapshot.val());
    
    //Sửa dữ liệu
    data.set({
    id:1,
    title:"Ghi chu  20/12",
    content : "Demo content for note "


    })
        
    

 