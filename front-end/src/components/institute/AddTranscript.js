import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTranscript } from '../../store/actions/transcriptActions'
import { addTranscriptToBlockchain } from '../../blockchain/callProxyb'
import TranscriptSummary from './TranscriptSummary'
import { Link } from 'react-router-dom'

const _ = require("lodash")

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
            signature: {
                v: '',
                r: '',
                s: ''
            },
            loading: false,
            error: 0                                                      
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // console.log(this.props.location)
        if(this.props.location.state !== undefined && this.props.location.state !== null) {
            this.state.instituteId = this.props.location.state.instituteId;
        }
        else {
            this.state.error = "no institute id"
            // console.log(this.state.error)
            // alert("Cannot find the page requested")
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            loading: true
        })

        let obj = _.omit(this.state, ['loading','error','signature'])
        let data = await addTranscriptToBlockchain(obj)
        console.log(data)
        switch (data.id) {
            case "User rejected" :
                    
                    this.setState({
                        loading: false
                    })
                    break;
            case "metamask locked" :
                    alert("Please unlock metamask")
                    this.setState({
                        loading: false
                    })
                    break;
            case "metamask not installed" :
                alert("Please install metamask")
                    this.setState({
                        loading: false
                    })
                    break;
            default:
                    this.setState({
                        transcriptId: this.state.instituteId + 'T' + data.id,
                        signature: {
                            v: data.sig.v,
                            r: data.sig.r,
                            s: data.sig.s
                        }
                    })
        
                    this.props.addTranscript(this.state)
                    this.setState({
                        error: "Successful",
                        loading: false
                    })
                
        }
        
    }

    render() {
        if(this.state.error === "no institute id") {
            return (
                <div className="container">
                    <h4 className="red-text text-lighten-1">ERROR! </h4>
                    <h5 className="red-text text-lighten-1">Cannot find the requested page </h5>
                </div>
            )
        }
        // if(this.state.error === "User rejected"){
        //     this.setState({
        //         loading: false
        //     })
            // return (
            //     alert("alert")
            //     // <div className="container">
            //     //     <h5 align="center" className="red-text text-lighten-1"> Transaction failed because user denied</h5>
            //     // </div>
            // )
        // }
        if(this.state.loading){
            return (
                <div className="container">
                    <h4 className="teal-text text-lighten-3"> Transcript is being added</h4>
                    <label> Waiting for a response from blockchain...</label>
                </div>
            )
        }

        if(this.state.error === "Successful") {
            let obj = _.omit(this.state, ['transcriptId', 'loading', 'error'])
            let instituteAddress = this.props.location.state.ins_addr
            return (
                <div className="container">
                    <h4 className="teal-text text-lighten-3"> Transcript added!</h4>
                    <Link to={{
                        pathname:'/transcript/' + this.state.transcriptId,
                        state: {instituteAddress}
                     }} 
                     key={this.state.transcriptId} >
                        <TranscriptSummary transcript={obj} key={this.state.transcriptId} />
                    </Link>
                </div>
            )
        }
        
        // if(this.state.error === 0 && this.state.transcriptId){    
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
        // }
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTranscript: (transcript) => dispatch(addTranscript(transcript))
    }
}

export default connect(null, mapDispatchToProps)(AddTranscript)