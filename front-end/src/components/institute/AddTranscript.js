import React, { Component } from 'react' 

class AddTranscript extends Component {
    constructor(props){
        super(props);
        this.state = {
            transcript_id: '', transcript_date: '', student_id: '',
            student_name: '', program_name: '', marks_details: ''
        };

        this.handleTranscriptID = this.handleTranscriptID.bind(this);
        this.handleTranscriptDate = this.handleTranscriptDate.bind(this);
        this.handleStudentID = this.handleStudentID.bind(this);
        this.handleStudentName = this.handleStudentName.bind(this);
        this.handleProgramName = this.handleProgramName.bind(this);
        this.handleMarksDetails = this.handleMarksDetails.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTranscriptID(event) {
        this.setState({transcript_id: event.target.value});
    }
    
    handleTranscriptDate(event) {
        this.setState({transcript_date: event.target.value});
    }

    handleStudentID(event) {
        this.setState({student_id: event.target.value});
    }

    handleStudentName(event) {
        this.setState({student_name: event.target.value});
    }

    handleProgramName(event) {
        this.setState({program_name: event.target.value});
    }

    handleMarksDetails(event) {
        this.setState({marks_details: event.target.value});
    }

    handleSubmit(event) {
        alert('Data Submitted: \n TranscriptID: '+ this.state.transcript_id + ' TranscriptDate: '+ this.state.transcript_date + 
        '\n StudentID: '+ this.state.student_id + ' StudentName: '+ this.state.student_name +
        '\n ProgramName: '+ this.state.program_name + ' MarksDetails: '+ this.state.marks_details)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h3>Transcript Details</h3>

                <p> Enter the Transcript Details as per the Standardised Format</p>
               
                <div className="input-field"> 
                    <input id="TranscriptID" type="text" className="validate" onChange={this.handleTranscriptID}/>
                    <label htmlFor="TranscriptID">Transcript ID</label>
                </div>

                <div className="input-field"> 
                    <input id="TranscriptDate" type="text" className="validate" onChange={this.handleTranscriptDate}/>
                    <label htmlFor="TranscriptDate">Transcript Date</label>
                </div>

                <div className="input-field"> 
                    <input id="StudentID" type="text" className="validate" onChange={this.handleStudentID}/>
                    <label htmlFor="StudentID">Student ID</label>
                </div>

                <div className="input-field"> 
                    <input id="StudentName" type="text" className="validate" onChange={this.handleStudentName}/>
                    <label htmlFor="StudentName">Student Name</label>
                </div>

                <div className="input-field"> 
                    <input id="ProgramName" type="text" className="validate" onChange={this.handleProgramName}/>
                    <label htmlFor="ProgramName">Program Name</label>
                </div>

                <div className="input-field"> 
                    <input id="MarksDetails" type="text" className="validate" onChange={this.handleMarksDetails}/>
                    <label htmlFor="MarksDetails">Details of Marks</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Add Transcript
                    <i className="material-icons right">send</i>
                </button>

            </form>
        )
    }
}

export default AddTranscript