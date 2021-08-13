import {useContext} from 'react';
import NavContext from '../context/NavContext';
import {CLOSE_NAV,OPEN_NAV} from '../context/types/NavTypes';
const Toggle = () => {

    const {state,dispatch} = useContext(NavContext);

    return (
        <div className={state ? 'toggle-close' : 'toggle-open'} onClick={() => dispatch({type:OPEN_NAV})}>
            <span></span>
            <span></span> 
            <span></span>
        </div>
    )
}
export default Toggle;
