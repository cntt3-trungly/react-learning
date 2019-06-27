import React, { Component } from 'react'

export default class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            noteTitle :'',
            noteContent:''
        }

    }
    isChange =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name] :value
        })       
    }

    addData = (title,content) => {
        var item = {};
        item.tilte=title;
        item.content=content;
        console.log(item);
        
    } 
    
    render() {
        
        return (
            <div className="col-4">
                <h3>SỬA NỘI DUNG NOTE </h3>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề note</label>
                    <input type="text" className="form-control" 
                    name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTile" 
                    placeholder="Tiêu đề note"
                    onChange={(event) => this.isChange(event)} />
                    <small id="helpIdNoteTile" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <h3>SỬA NỘI DUNG NOTE </h3>
                <div className="form-group">
                    <label htmlFor="noteContent">Nội dung note</label>
                    <textarea type="text" className="form-control" name="noteContent"
                     id="noteTitle" aria-describedby="helpIdNoteTile" placeholder="Nôi dung note" 
                     defaultValue={""} 
                     onChange={(event) => this.isChange(event)} />
                    <small id="helpIdNoteTile" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(tilte,content)=>this.addData(this.state.noteTitle,this.state.noteContent)}>New</button>
            </div>

        )
    }
}
