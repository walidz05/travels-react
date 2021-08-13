import {useReducer} from  'react';
import ModelContext from '../../context/ModelContext';
import ModelReducer from '../../context/reducers/ModelReducer';
const ModelProvider = (props) => {

    const [state,dispatch] =  useReducer(ModelReducer, {
         ModelStatus:false,
         current:''
        });
        
        return (
             <ModelContext.Provider value={{state,dispatch}}>
                 {props.children}
             </ModelContext.Provider>
        )
}

export default ModelProvider;
