import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            permission: ""

        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
    }



    hienThi = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm mới</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <label >Tên User</label>
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" aria-describedby="helpId" placeholder="Nhập tên User" />
                                </div>
                                <div className="form-group">
                                    <label >Điện thoại</label>
                                    <input type="text" onChange={(event) => this.isChange(event)} name="phone" className="form-control" aria-describedby="helpId" placeholder="Nhập Điện thoại" />
                                </div>
                                <div className="form-group">
                                    <label >Chọn quyền</label>
                                    <select onChange={(event) => this.isChange(event)}
                                        name="permission"
                                        className="custom-select" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, phone, permission) => this.props.add(this.state.name, this.state.phone, this.state.permission)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    // test1

    //   cách 1
    // themmoiclick = ()=>{
    //     this.setState({
    //         trangThaiChinhSua: true
    //     });
    // }
    // donglaiclick = ()=>{
    //     this.setState({
    //         trangThaiChinhSua: false
    //     });
    // }

    // Cách 2

    // thaydoitrangthai =() =>{
    //     this.setState({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     });
    // }   

    // hienthinut =() =>{
    //     if(this.state.trangThaiChinhSua === true ) {
    //         return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.thaydoitrangthai()}>Đóng lại</div>;
    // }
    //     else {
    //         return  <div className="btn btn-block btn-outline-info"  onClick={()=>this.thaydoitrangthai()}>Thêm mới</div>;}
    // }

    // hienThiForm =() =>{
    //     if(this.state.trangThaiChinhSua === true){
    //        return( <div className="card text-left mt-2">
    //                 <div className="card border-primary mb-3 ">
    //                     <div className="card-header">Thêm mới</div>
    //                     <div className="card-body text-primary">
    //                         <div className="form-group">
    //                             <label >Tên User</label>
    //                             <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập tên User" />
    //                         </div>
    //                         <div className="form-group">
    //                             <label >Điện thoại</label>
    //                             <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập Điện thoại" />
    //                         </div>
    //                         <div className="form-group">
    //                             <label >Chọn quyền</label>
    //                             <select className="custom-select" required>
    //                                 <option value>Chọn quyền mặc định</option>
    //                                 <option value={1}>Admin</option>
    //                                 <option value={2}>Moderator</option>
    //                                 <option value={3}>Normal</option>
    //                             </select>
    //                         </div>
    //                         <div className="form-group">
    //                             <div className="btn btn-block btn-primary">Thêm mới</div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>)
    //     }

    // }


    // text 2

    render() {
        return (

            // {/* {this.hienthinut()} */ }
            //     {/* {this.hienThiForm()} */ }
            <div>{
                this.hienThi()
            }
            </div>)
    }
}

export default AddUser;