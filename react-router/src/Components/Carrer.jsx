import React from 'react'
import CareerCard from '../assets/CarrerCard'

function Carrer() {
  let career_data = [
    {
      name: "MEAN vs MERN: Career Growth and Salary",
      image: "https://www.guvi.in/blog/wp-content/uploads/2020/12/tumbnail-img-2-1024x516.jpg"
    },
    {
      name: "Is Switching Careers from Non-Tech to Tech Challenging?",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/10/Non-tech-to-Tech-How-difficult-is-that-300x162.png"
    },
    {
      name: "Top 12 Career Opportunities for UI/UX Design",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/UX-768x402.webp"
    },
    {
      name: "Top 5 Tech Careers of the Future 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/01/Top-5-Tech-Careers-in-2023-1-300x169.png"
    }
  ]
  return <>
    <div className="container">
    <h2 className="card-title mt-3">Career</h2>
      <div className='row justify-content-center mt-4'>
        {
          career_data.map((e, i) => {
            return <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
              <CareerCard career_data={e} key={i} />
            </div>
          })
        }

      </div>
    </div>
  </>
}

export default Carrer