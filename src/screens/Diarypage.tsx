import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import { Diary } from '../model'

const Diarypage:React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (pageName : string) => {
    navigate(pageName);
  }

  return (
    <div>
      <h2 className='diary-heading'>Diary</h2>
      <button className = 'create-diary-button' onClick={() => {handleClick('/create-diary')}}> + Create New Entry </button>

    </div>
  )
}

export default Diarypage;