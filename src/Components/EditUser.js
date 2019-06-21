import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
        }
    }
    //Luu thay doi 
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }
    //end luu thay doi

    //xu ly nut luu chuyen props
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    //end xu ly nut luu truyen props
    render() {
        return (
            <div className="col">
                <form method="post">
                    <div className="card text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Sửa Thông tin User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" aria-describedby="helpId"
                                    placeholder="Tên User"
                                    defaultValue={this.props.userEditObject.name}
                                    onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" className="form-control" aria-describedby="helpId"
                                    placeholder="Điện thoại"
                                    defaultValue={this.props.userEditObject.tel}
                                    onChange={(event) => this.isChange(event)} />
                            </div>
                            <div className="form-group">
                                <select
                                    defaultValue={this.props.userEditObject.permission}
                                    onChange={(event) => this.isChange(event)}
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
                                    onClick={() => this.saveButton()}
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