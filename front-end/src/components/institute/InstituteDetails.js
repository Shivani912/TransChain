import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
// import AddTranscript from './AddTranscript'
import ShowTranscripts from './ShowTranscripts'
// import login from '../../blockchain/callProxyb'

const InstituteDetails = (props) => {
    const {newInstitute} = props;
    const {instituteId} = props;
    const {transcripts} = props;

    // console.log(newInstitute)

    if (newInstitute){
        const ins_addr = newInstitute.ins_acc_address
        return(
            <div className="dashboard container">

                <div className="row">
                {/* <h4 className="teal-text text-lighten-3">Profile</h4> */}
                    <div className="col s12 m6">
                    
                        {/* <div className="card z-depth-0"> */}
                            <div className="card-content teal-text text-lighten-3">
                                <span className="card-text">Logged In ID - {instituteId}</span><br/>
                                <span className="card-text">Name - {newInstitute.ins_name} </span><br/>
                                <span className="card-text">Ethereum Address - {newInstitute.ins_acc_address} </span><br/>
                            </div>
                        {/* </div> */}
                    </div>
                
                    <div className="col s12 m6">
                        <Link to={{
                            pathname: '/addTranscript/'+instituteId,
                            state: {instituteId, ins_addr}
                            }}>
                            <div className="input-field">
                                <button className="btn waves-effect waves-light" type="submit" name="action">+ Transcript
                                </button>
                            </div>
                        </Link>
                    </div>

                    <ShowTranscripts transcripts={transcripts} instituteId={instituteId} instituteAddress={newInstitute.ins_acc_address}/>
                </div>

                {/* </div> */}

                {/* <div className="row">
                    {/* <div className="col s12 m6"> */}
                        {/* <AddTranscript instituteId={instituteId} /> */}
                    {/* </div> */}
                {/* </div> */} */}

            </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading Institute ...</p>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    // console.log(ownProps);
    const id = ownProps.match.params.id;
    // const id = '49R71wE3A6GdxRBxR95r';
    const institutions = state.firestore.data.institutions;
    const newInstitute = institutions ? institutions[id] : null
    // console.log(newInstitute)
    return{
        newInstitute: newInstitute,
        instituteId: id,
        transcripts: state.firestore.ordered.transcripts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'institutions' },
        { collection: 'transcripts' }
    ])
)(InstituteDetails)

