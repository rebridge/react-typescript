import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';

function HomeContent() {
  return (
    <body className='text-center'>

      <Container>

        <div role='main' className="inner cover">
          <h1 className='cover-heading'>Hello</h1>
          <p className="lead">This is a small personal website. I use this as a simple project as a place to learn new web technologies.
            This site was built using React and React-Bootstrap.</p>
        </div>

      </Container>

    </body>
  )
}

export default HomeContent