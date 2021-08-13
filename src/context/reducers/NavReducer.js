import {OPEN_NAV} from '../types/NavTypes';

const NavReducer = (state,action) => {

    if(action.type === OPEN_NAV)
    {
        return !state;
    }
    else {
        return state;
    }

}

export default NavReducer;