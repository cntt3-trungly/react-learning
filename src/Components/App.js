import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Seach from './Seach';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: ''
    }
  }

  getDataAddUser = (name,phone,permission) => {
   var item={};
   item.id="";
   item.name=name;
   item.tel=phone;
   item.permission=permission;
   console.log(item);
   var items = this.state.data
   items.push(item);
   this.setState({
     data : items
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

    return (
      <div>
        <Header />

        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Seach
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm} />
                <TableData dataUserProps={ketqua} />
                <AddUser add={(name,phone,permission) => this.getDataAddUser(name,phone,permission)}
                hienThiForm={this.state.hienThiForm}/>
    
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
