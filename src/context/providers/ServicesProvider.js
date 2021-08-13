import React,{useState,useReducer} from 'react'
import ServicesContext  from '../ServicesContext'

const ServicesProvider = (props) => {


    
    return <ServicesContext.Provider value=''>
            {props.children}
    </ServicesContext.Provider>
}

export default ServicesProvider
