import React, { Component } from 'react';
import { connect } from 'react-redux';


class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }

        

    }


    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            });
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    addData = (title, content) => {
        if (this.state.id) {//edit case
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteContent = this.state.noteContent;
            editObject.noteTitle = this.state.noteTitle;
            this.props.editDataStore(editObject)
            this.props.changeEditStatus();
            this.props.alertOn('Sửa Thành Công');
        } else {// add case
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item);
            this.props.changeAddStatus();
            this.props.changeEditStatus();
            this.props.alertOn('Thêm mới Thành Công');
            
        }
    }
    showTitle = () => {
        if (this.props.isAdd) {
            return (<h3>Thêm mới </h3>)
        }
        else {
            return (<h3> Sửa note </h3>)
        }
    }
    render() {

        return (
            <div className="col-4">
                {
                    this.showTitle()
                }
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề note</label>
                    <input
                        defaultValue={this.props.editItem.noteTitle}
                        type="text" className="form-control"
                        name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTile"
                        placeholder="Tiêu đề note"
                        onChange={(event) => this.isChange(event)} />
                    <small id="helpIdNoteTile" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <h3>SỬA NỘI DUNG NOTE </h3>
                <div className="form-group">
                    <label htmlFor="noteContent">Nội dung note</label>
                    <textarea

                        type="text" className="form-control" name="noteContent"
                        id="noteTitle" aria-describedby="helpIdNoteTile" placeholder="Nôi dung note"
                        defaultValue={this.props.editItem.noteContent}
                        onChange={(event) => this.isChange(event)} />
                    <small id="helpIdNoteTile" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button type="submit" className="btn btn-primary"
                    onClick={(tilte, content) => this.addData(this.state.noteTitle, this.state.noteContent)}>Add    </button>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isAdd: state.isAdd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({ type: 'ADD_DATA', getItem })
        },
        editDataStore: (getItem) => {
            dispatch({ type: 'EDIT', getItem })
        },
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })

        },
        changeAddStatus: () => {
            dispatch({
                type: "CHANGE_ADD_STATUS"
            })

        },
        alertOn: (alertContent) => {
            dispatch({
                type: "ALERT_ON_STATUS",
                alertContent
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF_STATUS"
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
