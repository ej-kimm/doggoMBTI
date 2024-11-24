import React, { useEffect, useState } from 'react'
import questionsData from '../data/questionsData.json'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Question() {
  const { id } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState()
  const navigate = useNavigate()

  const goToNextQuestion = () => {
    const nextId = Number(id) + 1
    navigate(`/question/${nextId}`)
  }

  useEffect(() => {
    const filteredQuestion = questionsData.filter(
      (data) => data.id === Number(id)
    )
    setCurrentQuestion(filteredQuestion[0])
  }, [id])

  return (
    <>
      {currentQuestion && (
        <section className="question">
          <div className="progress-bar">
            <div className="progress-bar-gauge">
              <img src="/images/progress_dog.png" alt="progress" />
            </div>
          </div>
          <div className="question-content">
            <h3 className="title">{currentQuestion.question}</h3>
            {/* <div className="character"></div> */}
            <div className="button-wrapper">
              {currentQuestion.options.map((option, index) => (
                <button className="answer-btn" key={index} type="button">
                  {option.answer}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
