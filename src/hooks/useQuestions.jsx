import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import questionsData from '../data/questionsData.json'

export default function useQuestions() {
  const { id } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const navigate = useNavigate()

  const goToNextQuestion = () => {
    const nextId = Number(id) + 1
    if (nextId <= 14) {
      navigate(`/question/${nextId}`)
    }
  }

  useEffect(() => {
    const filteredQuestion = questionsData.filter(
      (data) => data.id === Number(id)
    )
    setCurrentQuestion(filteredQuestion[0])
  }, [id])

  return { currentQuestion, goToNextQuestion }
}
