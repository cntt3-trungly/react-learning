import React, { Component } from 'react';

class AppProducts extends Component {
    constructor(props) {
        super(props);
        this.state={
            product_name:'',
            product_price:'',
            image:''
        }
    }
    isChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })

    }
    handleClick =()=>{
        console.log(JSON.stringify(this.state));
         }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-8 mx-auto">
                        <form >
                            <div className="form-group">
                                <label htmlFor="product_name">Tên sản phẩm</label>
                                <input type="text" className="form-control" name="product_name"
                                id="product_name" aria-describedby="name_text" 
                                placeholder="Nhập tên sản phẩm" 
                                onChange={(event)=>this.isChange(event)}/>
                                <small id="name_text" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_price">Tên sản phẩm</label>
                                <input type="text" className="form-control" name="product_price" 
                                id="product_price" aria-describedby="price_text" 
                                placeholder="Nhập giá sản phẩm" 
                                onChange={(event)=>this.isChange(event)}
                                />
                                <small id="price_text" className="form-text text-muted">Help text</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Tên sản phẩm</label>
                                <input type="text" className="form-control" name="image" 
                                id="image" aria-describedby="price" placeholder="Nhập ảnh sản phẩm" 
                                onChange={(event)=>this.isChange(event)}/>
                                <small id="price" className="form-text text-muted">Help text</small>
                            </div>
                            <button type="reset" className="btn btn-info" onClick={()=>this.handleClick()}>Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default AppProducts;