import  {useReducer} from 'react';
import NevContext from '../NavContext';
import NavReducer from '../reducers/NavReducer';     

const NewProvider = (props) => {


    const [state,dispatch] = useReducer(NavReducer,false);

    return(
        <NevContext.Provider value={{state,dispatch}}>
            {props.children}    
        </NevContext.Provider>
    )

}
export default NewProvider;