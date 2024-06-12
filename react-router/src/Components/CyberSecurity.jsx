import React from 'react'
import CyberCard from '../assets/CyberCard'

function CyberSecurity() {
  
    let cs_data = [
        {
            name: "Cyber Security vs Ethical Hacking: Top 10 Differences",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png"
        },
        {
            name: "8 Different types of Cyber Security and Threats Involved",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png"
        },
        {
            name: "The Ultimate Roadmap CyberSecurity for Beginners",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif"
        },
        {
          name: "The Cyber Security Surge: 5 Must have Certifications",
          image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png"
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