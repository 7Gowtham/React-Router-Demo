import React from 'react'

function DSCard({ ds_data }) {
    return <>
        <div className="card h-100">
            <img src={ds_data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ds_data.name}</h5>
            </div>
        </div>

    </>
}

export default DSCard