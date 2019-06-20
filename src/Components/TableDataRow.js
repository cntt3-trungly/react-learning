import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (this.props.permission === 1) { return "Admin"; }
        else if (this.props.permission === 2) { return "Moderator"; }
        else { return "Normal User"; }
    }
    render() {
        return (

            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.name}</td>
                <td>{this.permissionShow()}</td>
                <td>{this.props.permission}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"> <i className="fa fa-edit" />Sửa</div>
                        <div className="btn btn-danger xóa"> <i className="fa fa-trash" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;