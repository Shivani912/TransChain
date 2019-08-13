import React, { Component } from 'react' 
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registration } from '../../store/actions/registrationActions'
import { register } from '../../blockchain/callProxyb'

class Registration extends Component {
    
    state = {
        ins_name: '', 
        ins_acc_address: '',
        ins_id: '',
        loading: false
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        let ins = await register();
        this.setState({
            ins_id: ins.instituteId,
            ins_acc_address: ins.accAddr
        });
        let obj = {
            ins_name: this.state.ins_name, 
            ins_acc_address: this.state.ins_acc_address,
            ins_id: this.state.ins_id,
        }
        this.props.registration(obj);
        this.setState({
            loading: false
        });
    }

    render() {
        if(this.state.loading) {
            return (
                <div className="container">
                    <h4 className="teal-text text-lighten-3"> Registration in progress</h4>
                    <label> Please wait a moment...</label>
                </div>
            )
        }
        else if(this.state.ins_id) {
            return (
                <div className="container">
                    <h4 className="teal-text text-lighten-3"> Registration successful!</h4><br/>
                    <label><h6> Please log in using your id: {this.state.ins_id}</h6></label>
                </div>
            )
        }
        return (
            <div className="container">
                <h4 className="teal-text text-lighten-3"> Want to join us?</h4>
                <form onSubmit={this.handleSubmit} >
                    
                    <div className="input-field">
                        <input id="ins_name" type="text" className="validate" minLength="3" required onChange={this.handleChange}/>
                        <label htmlFor="ins_name">Institute Name</label>
                    </div>
                    
                    {/* <div className="input-field"> 
                        <input id="ins_acc_address" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="ins_acc_address">Metamask Address</label>
                    </div> */}

                    {/* <div className="input-field"> 
                        <input id="ins_pk" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="ins_pk">Institute PK</label>
                    </div> */}

                    {/* <Link to="/instituteDetails/" + > */}
                    {/* <Link to={'/instituteDetails/' + this.state.ins_id}> */}
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Register using Metamask
                                {/* <i className="material-icons right">send</i> */}
                            </button>
                        </div>
                    {/* </Link> */}
                </form>
            </div>
            
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        registration: (newInstitute) => dispatch(registration(newInstitute))
    }
}

export default connect(null, mapDispatchToProps)(Registration)