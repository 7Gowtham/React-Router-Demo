import React, { useState } from 'react'
import Card from '../assets/Card'

function FullStack() {

  let fs_data = [
    {
      name: "Introduction to HTML and Best Web Development Roadmap for Beginners 2024",
      image: "https://cdn.pixabay.com/photo/2014/07/08/09/58/html5-386614_1280.jpg"
    },
    {
      name: "Introduction to CSS and Future of Full Stack Development",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Best Full Stack Development Project Ideas in 2024...",
      image: "https://img.freepik.com/free-vector/portrait-programmer-working-with-pc_23-2148222500.jpg?size=626&ext=jpg"
    },
    {
      name: "How long would it take to be a Full Stack Developer????",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp"
    },
    {
      name: "How does Apache work? A detailed Introduction to Apache",
      image: "https://djeqr6to3dedg.cloudfront.net/repo-logos/library/httpd/live/logo.png"
    },
    {
      name: "10 best Database Management Systems for Software Developers",
      image: "https://img.freepik.com/premium-vector/computer-database-analysis_18660-3848.jpg?w=1380"
    },
    {
      name: "6 Essential Prerequisites for learning React",
      image: "https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148152149.jpg?size=626&ext=jpg"
    },
    {
      name: "Top 10 Full Stack Developer Frameworks in 2024",
      image: "https://img.freepik.com/premium-vector/man-holding-certificate-2d-vector-isolated-illustration_151150-10226.jpg?size=626&ext=jpg"
    }

  ]

  return <>
    <div className="container">
      <h2 className="card-title mt-3">Full Stack Development</h2>
      <div className='row justify-content-center mt-4'>
        {
          fs_data.map((e, i) => {
            return <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
              <Card fs_data={e} key={i} />
            </div>
          })
        }

      </div>
    </div>
  </>
}

export default FullStack