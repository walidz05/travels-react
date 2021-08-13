import React,{useContext} from 'react';
import ModelContext from '../context/ModelContext';
import {OPEN_MODEL} from '../context/types/ModelTypes';

const Login = (props) => {

    const {dispatch} = useContext(ModelContext);

    return (
           <div>
            <form>
                <div className="model__heading">
                    <h3>Login</h3>
                </div>
                <div className="group">

                    <div className="group">
                    <input type="email" name="" className="group__control" placeholder="Enter Email" />
                    </div>

                    <div className="group">
                    <input type="password" name="" className="group__control" placeholder="Enter password" />
                    </div>

                    <div className="group f-flex">
                        <input type="submit" value="Login" className="btn-dark" />
                        <span onClick={() => dispatch({type:OPEN_MODEL,payload:props.currentModel})}>Create A new Account</span>
                    </div>
                  
                </div>
            </form>
        </div>
    )
}

export default Login
