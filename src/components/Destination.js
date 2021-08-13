import React,{useState,useContext} from 'react'
import DestinationContext from '../context/DestinationContext';
import DestinationItem from './DestinationItem';

const Destination = () => {

    const {destinationsData:{destinations},dispatch} = useContext(DestinationContext) 

    const [state] =useState({
        heading:'  Discover the most engaging pleaces in the world width travel Friends',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque recusandae, explicabo id perspiciatis nam distinctio ea eius non dicta amet, magnam in nihil ullam, facere eum quasi voluptatem reiciendis nisi illo quae atque. Itaque sunt aperiam accusamus quidem nam, vero, blanditiis quos repellat consequuntur, tenetur nesciunt ab perspiciatis fugiat.'
    })

    return (
        <div className="destinations">
            <div className="container">
                <div className="row ml-minus-15 mr-minus-15">
                    <div className="col-6 p-15">
                        <h3 className="destinations__heading animation">
                            {state.heading}
                        </h3>

                    </div>
                    <div className="col-6 p-15">
                        <p className="destinations__para animation">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
            <br /><br /><br /><br /><br />
                <div className="destinations__block">
                    <div className="row ml-minus-15 mr-minus-15">
                        { destinations.map(des => (
                                <div className="col-3 p-15">
                                    <DestinationItem destination={des} key={des.id}/>
                                </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
