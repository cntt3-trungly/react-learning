import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card text-left">
                    <img className="card-img-top" src="http://thuthuat123.com/uploads/2018/01/27/anh-dai-dien-dep-nhat-10_091855.jpg" alt />
                    <div className="card-body">
                        <h5 className="card-title float-left">Tên sản phẩm</h5>
                        <h5 className="card-title  float-right">500.000</h5>
                    </div>
                </div>
            </div>

        );
    }
}

export default Products;