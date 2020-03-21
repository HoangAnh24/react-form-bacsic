import React, { Component } from 'react'; 
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            txtUserName : '',
            txtPassWord : '',
            txtDesc : '',
            sltGender : 1,
            rdlang : 'en',
            cbStatus : true 
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(event) {
       let target = event.target;
       let name = target.name;
       let value = (target.type === "checkbox" ) ? target.checked : target.value;
       this.setState({
           [name] : value
       });
    }
    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() { 
        return (
            <div className="container">
                <div className="row">
                    <div className=" col-md-8 col-md-offset-2 mt-30">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h2 className="panel-title text-center">Form</h2>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="">User Name:</label>
                                        <input type="text" name="txtUserName" className="form-control" onChange={this.onHandleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password:</label>
                                        <input type="password" name="txtPassWord" className="form-control" onChange={this.onHandleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Description:</label> 
                                        <textarea name="txtDesc"  className="form-control" rows="3" onChange={this.onHandleChange}  ></textarea> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Gender:</label>  
                                        <select name="sltGender"   className="form-control" onChange={this.onHandleChange}  defaultValue={this.state.sltGender}  >
                                            <option value={0}  >Female</option>
                                            <option value={1}  >Male</option>
                                        </select> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Language:</label>   
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="rdLang" value="en"  checked={this.state.rdlang === "en"} onChange={this.onHandleChange} />
                                                English
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="rdLang" value="vn" checked={this.state.rdlang === "vn"} onChange={this.onHandleChange} />
                                                Vietnamese
                                            </label>
                                        </div> 
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Status:</label>   
                                        
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="cbStatus" value={true} checked={this.state.cbStatus === true} onChange={this.onHandleChange} />
                                                Very Good
                                            </label>
                                        </div>
                                        
                                    </div>

                                    <button type="submit" className="btn btn-primary">Save </button>&nbsp;
                                    <button type="reset" className="btn btn-success">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
