import React, { Component } from 'react';

class AppProducts extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-8 mx-auto">
                        <form action="/add" method="post">
                            <div className="form-group">
                                <label htmlFor="product_name">Tên sản phẩm</label>
                                <input type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" />
                                <small id="name_text" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_price">Tên sản phẩm</label>
                                <input type="text" className="form-control" name="product_price" id="product_price" aria-describedby="price_text" placeholder="Nhập giá sản phẩm" />
                                <small id="price_text" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Tên sản phẩm</label>
                                <input type="text" className="form-control" name="image" id="image" aria-describedby="price_text" placeholder="Nhập ảnh sản phẩm" />
                                <small id="price_text" className="form-text text-muted">Help text</small>
                            </div>
                            <button type="submit" className="btn btn-info">Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AppProducts;