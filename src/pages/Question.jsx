import React, { useEffect, useState } from 'react'
import questionsData from '../data/questionsData.json'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'
import QuestionContent from '../components/QuestionContent'

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
          <ProgressBar />
          <QuestionContent
            question={currentQuestion.question}
            options={currentQuestion.options}
            onAnswer={goToNextQuestion}
          />
        </section>
      )}
    </>
  )
}
