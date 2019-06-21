import React, { Component } from 'react';
import EditUser from './EditUser';

class Seach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '' 
        }
    }
    isShowEditForm =()=> {
        if(this.props.editUserStatus === true){
            return (
            <EditUser/>    
            )}
    }
        
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return < div className="btn btn-outline-info" onClick={() => this.props.ketNoi()}> Đóng lại</div >
        }
        else {
            return <div className="btn btn-outline-secondary" onClick={() => this.props.ketNoi()} >Thêm mới</div>
        }
    }

    render() {
        return (
        
            <div className="col-12">
                <div className="row">
                    {
                        this.isShowEditForm()
                    }                  
                </div>
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)}
                            aria-describedby="helpId" placeholder="Nhập tên" style={{ width: '650px' }} />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Seach;