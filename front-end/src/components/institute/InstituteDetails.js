import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const InstituteDetails = (props) => {
    const {newInstitute} = props;
    console.log(newInstitute)

    if (newInstitute){
        return(
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">Institute Id - {newInstitute.ins_acc_address}</span>
                        <span className="card-text">Institute Name - {newInstitute.ins_name} </span><br/>
                        <span className="card-text">Institute Address - {newInstitute.ins_acc_address} </span><br/>
                        <span className="card-text">Institute PK - {newInstitute.ins_pk} </span><br/>
                    </div>
                </div>
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
        newInstitute: newInstitute
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'institutions' }
    ])
)(InstituteDetails)

// export default class InstituteDetails extends Component {
//     constructor(props) {
//         super(props)
//         console.log("InstituteDetails Props")
//         console.log(props)
//         this.state = {id: props.match.params.id}
//     }
//     render() {
//         return (
//             <div className="dashboard container">
//                 <h2>Profile</h2>
//                 <h4>ID: {this.state.id}</h4>
//                 <h4>Name:</h4>
//                 <h4>Address:</h4>
//             </div>
//         )
//     }
// }
