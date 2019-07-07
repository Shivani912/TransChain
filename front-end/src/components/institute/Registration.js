import React, { Component } from 'react' 
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { registration } from '../../store/actions/registrationActions'

class Registration extends Component {
    
    state = {
        ins_name: '', 
        ins_acc_address: '',
        ins_pk: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.registration(this.state);
        // console.log("State after registration")
        // console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h4 className="grey-text text-darken-3"> Want to join us ?</h4>
                    <div className="input-field">
                        <input id="ins_name" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="ins_name">Institute Name</label>
                    </div>
                    
                    <div className="input-field"> 
                        <input id="ins_acc_address" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="ins_acc_address">Metamask Address</label>
                    </div>

                    <div className="input-field"> 
                        <input id="ins_pk" type="text" className="validate" onChange={this.handleChange}/>
                        <label htmlFor="ins_pk">Institute PK</label>
                    </div>

                    {/* <Link to="/instituteDetails/:id"> */}
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Register
                                <i className="material-icons right">send</i>
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