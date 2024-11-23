import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/question/1')
  }

  return (
    <section className="home">
      <header className="home-header">
        <h1 className="title">멍BTI</h1>
        <p className="sub-title">우리 강아지는 어떤 성격일까?</p>
      </header>
      <section className="home-content">
        <img src="./images/doggoMBTI_main.png" alt="멍BTI 메인" />
        <button className="start-button" type="button" onClick={handleStart}>
          시작하기
        </button>
      </section>
    </section>
  )
}
