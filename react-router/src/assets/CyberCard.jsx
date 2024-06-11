import React from 'react'

function CyberCard({cs_data}) {
    return <>
        <div className='parent'>
            <img src={cs_data.image} className="card-img-top" style={{width:"304px", height:"200px"}} alt="..."/>
            <div className="card-body">
                <h5 className="card-text mt-1 p-3" style={{width:"300px", height:"100px"}}>{cs_data.name}</h5>
            </div>
        </div>
    </>
}

export default CyberCard