import React from 'react'

function CarrerCard({career_data}) {
    return <>
        <div className='parent'>
            <img src={career_data.image} className="card-img-top" style={{width:"304px", height:"200px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-text mt-1 p-3" style={{width:"304px", height:"100px"}}>{career_data.name}</h5>
            </div>
        </div>
    </>
}

export default CarrerCard