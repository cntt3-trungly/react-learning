import React, { Component } from 'react';
import TableDataRow from './TableDataRow';



class TableData extends Component {
    deleteButtonClick (isUser){
        this.props.deleteButtonClickApp(isUser);
    }
    mappingDataUser = ()=> 
        this.props.dataUserProps.map((value,key)=>(
            

            <TableDataRow
            deleteButtonClick={(isUser)=>this.deleteButtonClick(isUser)}
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            editFunClick ={(user)=>this.props.editFun(value)}
            key={key}
            id={value.id}             
            stt={value.id}
            name={value.name}        
            phone={value.tel}
            permission={value.permission}
            />
            
    ))
    
    render() {
        
        return (
            <div className="col">
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                        
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;