import React, { Component } from 'react' 

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {ins_name: '', ins_acc_address: ''};

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ins_name: event.target.value});
    }
    
    handleAddressChange(event) {
        this.setState({ins_acc_address: event.target.value});
    }

    handleSubmit(event) {
        alert('data submitted: \n name: '+ this.state.ins_name + ' address: '+ this.state.ins_acc_address)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h3> Want to join us ?</h3>
                <div className="input-field">
                    <input id="I_name" type="text" className="validate" onChange={this.handleNameChange}/>
                    <label htmlFor="I_name">Institute Name</label>
                </div>
                
                <div className="input-field"> 
                    <input id="I_addr" type="text" className="validate" onChange={this.handleAddressChange}/>
                    <label htmlFor="I_addr">Metamask Address</label>
                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Register
                    <i className="material-icons right">send</i>
                </button>

            </form>
        )
    }
}

export default Registration