import React, { Component } from 'react'

export default class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                    Ghi chú ngày 26/3/2019
          </a>
                            </h5>
                        </div>
                        <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                                trung dep trai.
        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="note2">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                                    Ghi chú ngày 26/3/2019
          </a>
                            </h5>
                        </div>
                        <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                            <div className="card-body">
                                trung dep trai.
        </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
