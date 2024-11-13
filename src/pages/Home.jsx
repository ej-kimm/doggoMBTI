import React from 'react'

export default function Home() {
  const handleStart = () => {
    // navigate
  }

  return (
    <main className="home">
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
    </main>
  )
}
