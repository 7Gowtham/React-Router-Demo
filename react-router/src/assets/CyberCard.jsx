import React from 'react'

function CyberCard({ cs_data }) {
    return <>
        <div className="card h-100">
            <img src={cs_data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cs_data.name}</h5>
            </div>
        </div>
    </>
}

export default CyberCard