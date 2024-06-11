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
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"
    },
    {
      name: "How long would it take to be a Full Stack Developer????",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp"
    },
    {
      name: "How does Apache work? A detailed Introduction to Apache",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw-300x124.png"
    },
    {
      name: "10 best Database Management Systems for Software Developers",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1-150x112.png"
    },
    {
      name: "6 Essential Prerequisites for learning React",
      image: "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg"
    },
    {
      name: "Top 10 Full Stack Developer Frameworks in 2024",
      image: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person-150x100.jpg"
    }
    
  ]

  return <>
    <div className="container">
    <h2 className="card-title mt-3">Full Stack Development</h2>
      <div className='row justify-content-center mt-4'>
        {
          fs_data.map((e, i) => {
            return <div className='col-md-3 mb-4'>
              <Card fs_data={e} key={i} />
            </div>
          })
        }

      </div>
    </div>
  </>
}

export default FullStack