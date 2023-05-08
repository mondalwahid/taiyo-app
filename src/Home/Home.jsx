import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      Homepage
      <button onClick={() => navigate('/contact')}>
        Click to toggle to contact page
      </button>
    </div>
  )
}

export default Home
