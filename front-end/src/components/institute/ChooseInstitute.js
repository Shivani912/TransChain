import React, { Component } from 'react'

class ChooseInstitute extends Component
{
    constructor(props) {
        super(props);
        this.state = {ins_id: '', ins_addr: ''};

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({ins_id: event.target.value});
    }
    handleAddressChange(event) {
        this.setState({ins_addr: event.target.value});
    }

    handleSubmit(event) {
        alert('Id: '+ this.state.ins_id + ' address: '+ this.state.ins_addr);
        event.preventDefault();
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Already a member?</h3>
                <div className="input-field">
                    <input id="In_Id" type="text" className="validate" onChange={this.handleIdChange}/>
                    <label htmlFor="In_Id">Institute ID</label>
                </div>

                <div className="input-field">
                    <input id="In_addr" type="text" className="validate" onChange={this.handleAddressChange}/>
                    <label htmlFor="In_addr">Address</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Log In
                    <i className="material-icons right">send</i>
                </button>
            </form>
            
        )
    }
}


export default ChooseInstitute