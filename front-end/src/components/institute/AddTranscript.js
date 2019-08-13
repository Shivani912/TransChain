import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTranscript } from '../../store/actions/transcriptActions'
import { addTranscriptToBlockchain, getTranscriptById } from '../../blockchain/callProxyb'

class AddTranscript extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            studentName: '',
            studentId: '',
            credential: '',
            program: '',
            major: '',
            minReqProgramGPA: '',
            actualProgramGPA: '',
            collegeName: '',
            instituteId: '',
            entryTerm: '',
            endTerm: '',
            courseName: '',
            courseCode: '',
            courseGrade: '',     
            courseTerm: '',                                                         
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // console.log(this.props.instituteId)
        this.state.instituteId = this.props.instituteId;
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
        console.log(this.state.studentName)
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        // let id = await addTranscriptToBlockchain(this.state)
        // console.log(id)
        // this.setState({transcriptID:id})
        // let t = await getTranscriptById(id)
        // this.setState({instituteId:t.instituteId})
        this.props.addTranscript(this.state, '2');
        
        // console.log(t.instituteId)
        // console.log(this.state);
        // alert('Transcript Added: \n transcriptID: '+ this.state.transcriptID + ' transcriptDate: '+ this.state.transcriptDate + 
        // '\n studentID: '+ this.state.studentID + ' studentName: '+ this.state.studentName +
        // '\n programName: '+ this.state.programName + ' marksDetails: '+ this.state.marksDetails)
    }

    render() {
        return (
            <div>
                <h4 align="center" className="teal-text text-lighten-3">New Transcript</h4>
            
            <div className="dashboard container institute">
                
                <div className="row">
                    <form onSubmit={this.handleSubmit} >
                        

                        <p className="teal-text text-lighten-3"> Please fill up the details below</p>
                    
                        <div className="input-field"> 
                            <input id="studentName" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="studentName">Student Name</label>
                        </div>

                        <div className="input-field"> 
                            <input id="studentId" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="studentId">Student ID</label>
                        </div>

                        <div className="input-field"> 
                            <input id="credential" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="credential">Credential</label>
                        </div>


                        <div className="input-field"> 
                            <input id="program" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="program">Program</label>
                        </div>

                        <div className="input-field"> 
                            <input id="major" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="major">Major</label>
                        </div>

                        <div className="input-field"> 
                            <input id="minReqProgramGPA" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="minReqProgramGPA">Minimum Required Program GPA</label>
                        </div>

                        <div className="input-field"> 
                            <input id="actualProgramGPA" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="actualProgramGPA">Actual Program GPA</label>
                        </div>

                        <div className="input-field"> 
                            <input id="collegeName" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="collegeName">College Name</label>
                        </div>

                        <div className="input-field"> 
                            <input id="entryTerm" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="entryTerm">Entry Term</label>
                        </div>

                        <div className="input-field"> 
                            <input id="endTerm" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="endTerm">End Term</label>
                        </div>

                        <div className="input-field"> 
                            <input id="major" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="major">Major</label>
                        </div>

                        <div className="col s12 m6">
                            <p className="teal-text text-lighten-3"> COURSE 1</p>
                            <div className="input-field"> 
                                <input id="courseName" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseName">Course Name</label>
                            </div>

                            <div className="input-field"> 
                                <input id="courseCode" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseCode">Course Code</label>
                            </div>

                            <div className="input-field"> 
                                <input id="courseGrade" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseGrade">Course Grade</label>
                            </div>

                            <div className="input-field"> 
                                <input id="courseTerm" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseTerm">Course Term</label>
                            </div>
                        </div>

                        {/* <div className="col s12 m6">
                            <p className="teal-text text-lighten-3"> COURSE 2</p>
                            <div className="input-field"> 
                                <input id="courseName" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseName">Course Name</label>
                            </div>

                            <div className="input-field"> 
                                <input id="courseCode" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseCode">Course Code</label>
                            </div>

                            <div className="input-field"> 
                                <input id="courseGrade" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseGrade">Course Grade</label>
                            </div>

                            <div className="input-field"> 
                                <input id="courseTerm" type="text" className="validate" onChange={this.handleChange}/>
                                <label htmlFor="courseTerm">Course Term</label>
                            </div>
                        </div> */}

                        
                        <p align="center">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Add Transcript
                        </button></p>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTranscript: (transcript, id) => dispatch(addTranscript(transcript, id))
    }
}

export default connect(null, mapDispatchToProps)(AddTranscript)