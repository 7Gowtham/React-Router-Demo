import React from 'react'
import DSCard from '../assets/DSCard'

function DataScience() {
  let ds_data = [
    {
      name: "Top 10 High Paying Non coding jobs in 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png"
    },
    {
      name: "12 Real World Data Science Examples: Power of Data Science",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp"
    },
    {
      name: "Roles and Responsibilities of a Data Scientist",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-300x169.png"
    },
    {
      name: "<strong>How long would it take to learn Data Science?</strong>",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-1536x804.png"
    }
  ]
  return <>
    <div className="container">
    <h2 className="card-title mt-3">Data Science</h2>
      <div className='row justify-content-center mt-4'>
        {
          ds_data.map((e, i) => {
            return <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
              <DSCard ds_data={e} key={i} />
            </div>
          })
        }
      </div>
    </div>
  </>
}

export default DataScience