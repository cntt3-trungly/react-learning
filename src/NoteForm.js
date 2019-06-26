import React, { Component } from 'react'

export default class NoteForm extends Component {
    render() {
        return (
            <div className="col-4">
                <h3>SỬA NỘI DUNG NOTE </h3>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề note</label>
                    <input type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTile" placeholder="Tiêu đề note" />
                    <small id="helpIdNoteTile" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <h3>SỬA NỘI DUNG NOTE </h3>
                <div className="form-group">
                    <label htmlFor="noteContent">Nội dung note</label>
                    <textarea type="text" className="form-control" name="noteContent" id="noteTitle" aria-describedby="helpIdNoteTile" placeholder="Nôi dung note" defaultValue={""} />
                    <small id="helpIdNoteTile" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button type="submit" className="btn btn-primary">New</button>
            </div>

        )
    }
}
