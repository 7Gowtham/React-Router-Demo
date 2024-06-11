import React from 'react'

function Card({ fs_data }) {
    return <>
        <div className='parent'>
            <img src={fs_data.image} className="card-img-top" style={{width:"303px", height:"190px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-text mt-1 p-2" style={{width:"300px", height:"100px"}}>{fs_data.name}</h5>
            </div>
        </div>
    </>
}

export default Card