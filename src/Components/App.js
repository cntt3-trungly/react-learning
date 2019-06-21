import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Seach from './Seach';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  // Bắt đầu hiển thị form Edit User 

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  // Kết thúc hiển thị form Edit User 

  getDataAddUser = (name, phone, permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = phone;
    item.permission = permission;
    console.log(item);
    var items = this.state.data
    items.push(item);
    this.setState({
      data: items
    });
    console.log(this.state.data);
  }


  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }
  // Lấy dữ liệu User bỏ vào form edit

  editUser = (user) => {
    console.log(user);
    this.setState({
      userEditObject: user
    });
  }

  // End lấy dữ liệu User bỏ vào form edit

  //Begin lay du lieu tu edit tu search

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.phone;
        value.permission = info.permission;
      }
    })

  }

  //End lay du lieu tu edit tu search

  //Start lay id delete

  deleteButtonClickApp = (id) => {
    var tempData= this.state.data.filter(item => item.id !== id );
    this.setState({
      data :tempData
    });
  }

   //end lay id delete

  // thongBao =()=>{
  //   alert('ket noi thanh cong') ;

  // }
  render() {
    var ketqua = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })
    localStorage.setItem("key1","haha");
    localStorage.removeItem("key1");
    console.log(localStorage.getItem("key1"));
    
    return (
      <div>
        <Header />

        <div className="searchForm">
          <div className="container">
            <div className="row">

              <Seach
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()} />

              <TableData
                deleteButtonClickApp={(id) => this.deleteButtonClickApp(id)}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()} />


              <AddUser
                add={(name, phone, permission) => this.getDataAddUser(name, phone, permission)}
                hienThiForm={this.state.hienThiForm} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
