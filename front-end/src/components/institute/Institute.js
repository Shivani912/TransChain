import React, { Component } from 'react'
import Registration from './Registration'
import ChooseInstitute from './ChooseInstitute'
// import ShowAllTranscripts from './ShowAllTranscripts'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class Institute extends Component {
    render() {
        // console.log(this.props)
        // const {transcripts} = this.props;
        // console.log(transcripts);

        return (
            <div className="dashboard container institute">
                <div className="row">
                    <div className="col s12 m6">
                        <Registration/>
                    </div>
                    <div class="vr">&nbsp;</div>
                    <div className="col s12 m6">
                        <ChooseInstitute/>
                    </div>
                </div>
                {/* <div className="row">
                    {/* <div className="col s12 m6">
                        <AddTranscript/>
                    </div> */}
                    {/* <div className="col s12 m6">
                        <ShowAllTranscripts transcripts={transcripts} />
                    </div> */}
                {/* </div> */} 
            </div>        
            )
    }
    
    componentDidUpdate(prevProps, prevState) {
        // only update chart if the data has changed
        // console.log(prevProps.transcripts.length)
        // console.log(this.props.transcripts.length)

        try{
            if ( prevProps && (prevProps.transcripts.length !== this.props.transcripts.length) ) {
            toaster.notify("New Transcripts Added", {
                position: 'bottom-right', // top-left, top, top-right, bottom-left, bottom, bottom-right
                duration: null // This notification will not automatically close
              }); 
            }
        }catch{}
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