import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTranscript } from '../../store/actions/transcriptActions'

class AddTranscript extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            transcriptID: '', transcriptDate: '', studentID: '',
            studentName: '', programName: '', marksDetails: '',
            instituteId:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // console.log(this.props.instituteId)
        this.state.instituteId = this.props.instituteId;
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTranscript(this.state);

        // console.log(this.state);
        // alert('Transcript Added: \n transcriptID: '+ this.state.transcriptID + ' transcriptDate: '+ this.state.transcriptDate + 
        // '\n studentID: '+ this.state.studentID + ' studentName: '+ this.state.studentName +
        // '\n programName: '+ this.state.programName + ' marksDetails: '+ this.state.marksDetails)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h3>Upload a Transcript</h3>

                <p> Enter the Transcript Details as per the Standardised Format</p>
               
                <div className="input-field"> 
                    <input id="transcriptID" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="transcriptID">Transcript ID</label>
                </div>

                <div className="input-field"> 
                    <input id="transcriptDate" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="transcriptDate">Transcript Date</label>
                </div>

                <div className="input-field"> 
                    <input id="studentID" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="studentID">Student ID</label>
                </div>

                <div className="input-field"> 
                    <input id="studentName" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="studentName">Student Name</label>
                </div>

                <div className="input-field"> 
                    <input id="programName" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="programName">Program Name</label>
                </div>

                <div className="input-field"> 
                    <input id="marksDetails" type="text" className="validate" onChange={this.handleChange}/>
                    <label htmlFor="marksDetails">Details of Marks</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Add Transcript
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTranscript: (transcript) => dispatch(addTranscript(transcript))
    }
}

export default connect(null, mapDispatchToProps)(AddTranscript)