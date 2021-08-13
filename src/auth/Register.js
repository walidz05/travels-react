import React,{useContext,useState} from 'react'
import ModelContext from '../context/ModelContext';
import {OPEN_MODEL} from '../context/types/ModelTypes';

const Register = (props) => {
    const {dispatch} = useContext(ModelContext);
    const {state,setState} = useState({
        name:'',
        email:'',
        password:''
    }) 


    const registerSubmit = (e) => {
        e.preventDefault();
    } 

    return (
        <div>
            <form onSubmit={registerSubmit}>
                <div className="model__heading">
                    <h3>Create New Account</h3>
                </div>
                <div className="group">

                    <div className="group">
                    <input onChange={(e) => setState({...state,name:e.target.value})} type="text" name="" className="group__control" placeholder="Enter Name" />
                    </div>

                    <div className="group">
                    <input onChange={(e) => setState({...state,email:e.target.value})} type="email" name="" className="group__control" placeholder="Enter Email" />
                    </div>

                    <div className="group">
                    <input onChange={(e) => setState({...state,password:e.target.value})} type="password" name="" className="group__control" placeholder="Create password" />
                    </div>

                    <div className="group f-flex">
                        <input type="submit" value="Register" className="btn-dark" />
                        <span onClick={() => dispatch({type:OPEN_MODEL,payload:props.currentModel})}>Already have an account ?</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
