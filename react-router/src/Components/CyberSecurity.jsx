import React from 'react'
import CyberCard from '../assets/CyberCard'

function CyberSecurity() {
  
    let cs_data = [
        {
            name: "Cyber Security vs Ethical Hacking: Top 10 Differences",
            image: "https://cdn.dribbble.com/userupload/12934344/file/original-c0ff9c64920f0b11e30229212f26a9f8.png?resize=800x600&vertical=center"
        },
        {
            name: "8 Different types of Cyber Security and Threats Involved",
            image: "https://cdn.dribbble.com/userupload/6729849/file/original-556bd1883a7097985b648ce41b94c32f.jpg?resize=640x480&vertical=center"
        },
        {
            name: "The Ultimate Roadmap CyberSecurity for Beginners",
            image: "https://cdn.dribbble.com/userupload/6672068/file/original-ccc5ad7854440cefc9f90e25d02302da.png?crop=0x0-4413x3310&resize=640x480&vertical=center"
        },
        {
          name: "The Cyber Security Surge: 5 Must have Certifications",
          image: "https://cdn.dribbble.com/userupload/12720527/file/original-84176ed69e7f706b60072a48103abd4a.jpg?crop=0x0-1483x1112&resize=640x480&vertical=center"
        }
    ]
  return <>
    <div className="container">
      <h2 className="card-title mt-3">Cyber Security</h2>
      <div className='row mt-4'>
        {
          cs_data.map((e, i) => {
            return <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
              <CyberCard cs_data={e} key={i} />
            </div>
          })
        }
      </div>
    </div>
  </>
}

export default CyberSecurity