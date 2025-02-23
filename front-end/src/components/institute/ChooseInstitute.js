import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ChooseInstitute extends Component
{
    state = {
        ins_id: '', 
        ins_addr: ''
    }

    handleChange = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state)

    }

    render() {
        return (
            <div className="container">
                <h4 className="teal-text text-lighten-3">Search an Institute</h4>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="input-field">
                        <input id="ins_id" type="text" className="validate" minLength="4" required onChange={this.handleChange}/>
                        <label htmlFor="ins_id">Institute ID</label>
                    </div>

                    {/* <div className="input-field">
                        <input id="ins_addr" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="ins_addr">Address</label>
                    </div> */}

                    <Link to={'/instituteDetails/' + this.state.ins_id}>
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Go
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </Link>
                    
                </form>
            </div>
            
            
        )
    }
}


export default ChooseInstitute