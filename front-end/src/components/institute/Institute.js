import React, { Component } from 'react'
import Registration from './Registration'
import ChooseInstitute from './ChooseInstitute'
import ShowAllTranscripts from './ShowAllTranscripts'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Institute extends Component {
    render() {
        // console.log(this.props)
        const {transcripts} = this.props;
        // console.log(transcripts);

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Registration/>
                    </div>
                    <div className="col s12 m6">
                        <ChooseInstitute/>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col s12 m6">
                        <AddTranscript/>
                    </div> */}
                    <div className="col s12 m6">
                        <ShowAllTranscripts transcripts={transcripts} />
                    </div>
                </div>
            </div>        
            )
    }
}

const mapStateToProps = (state)=>{
    // console.log(state);
    return{
        transcripts: state.firestore.ordered.transcripts
    }
}

// export default connect(mapStateToProps)(Institute)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'transcripts' }
    ])
)(Institute)