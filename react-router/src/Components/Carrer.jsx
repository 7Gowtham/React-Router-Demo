import React from 'react'
import CareerCard from '../assets/CarrerCard'

function Carrer() {
  let career_data = [
    {
      name: "MEAN vs MERN: Career Growth and Salary",
      image: "https://cdn.dribbble.com/users/12430409/screenshots/20525690/media/4dc552ffcdfda7c62dd389872f338417.png?resize=400x300&vertical=center"
    },
    {
      name: "Is Switching Careers from Non-Tech to Tech Challenging?",
      image: "https://cdn.dribbble.com/userupload/4008463/file/original-b2bf8e3aacba71390ddaea87dce1354a.png?resize=640x480&vertical=center"
    },
    {
      name: "Top 12 Career Opportunities for UI/UX Design",
      image: "https://cdn.dribbble.com/users/12674099/screenshots/19033789/media/e173794a4b6a10ef58735c495c0b4e38.jpg?resize=800x600&vertical=center"
    },
    {
      name: "Top 5 Tech Careers of the Future 2024",
      image: "https://cdn.dribbble.com/users/2806139/screenshots/16174294/media/9746b8325e56b64a55dc2921cb1c544a.png?resize=800x600&vertical=center"
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