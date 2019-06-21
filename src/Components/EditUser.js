import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="col">
                <form method="post">
                    <div className="card text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Sửa Thông tin User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" aria-describedby="helpId"
                                 placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" className="form-control" aria-describedby="helpId" 
                                placeholder="Điện thoại" />
                            </div>
                            <div className="form-group">
                                <select
                                    name="permission"
                                    className="custom-select" required>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" 
                                onClick={(name, phone, permission) => this.props.add(this.state.name, this.state.phone, this.state.permission)} 
                                value="Lưu" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;