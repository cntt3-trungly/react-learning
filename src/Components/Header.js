import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3">Project quản lí thành viên bằng React Js</h1>
                    <p className="lead">Với dữ liệu json</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;