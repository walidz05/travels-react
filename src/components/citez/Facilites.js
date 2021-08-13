import React from 'react';
import {BsCheck,BsX} from 'react-icons/bs';

const Facilites = ({name,value}) => {
    return (
        <>
               <div className="cities__body__contents__facilites">

                    <div className="cities__body__contents__facilites__name">
                        {name}
                    </div>

                    <div className="cities__body__contents__facilites__name__value">
                        {value ? <BsCheck size={20} color="#34D399"/> : <BsX size={20} color="#ff4d58" />  }
                    </div>

                    
               </div>
        </>
    )
}

export default Facilites
