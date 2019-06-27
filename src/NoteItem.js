import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
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

        );
    }
}

export default NoteItem;