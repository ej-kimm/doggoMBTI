import React from 'react'
import { useParams } from 'react-router-dom'
import useQuestions from '../hooks/useQuestions'
import { calculateProgress } from '../util/progress'

export default function ProgressBar() {
  const { id } = useParams()
  const { totalQuestions } = useQuestions()
  const progressPercentage = calculateProgress(id, totalQuestions)

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-gauge"
        style={{ left: `${progressPercentage}%` }}
      >
        <img src="/images/progress_dog.png" alt="progress" />
      </div>
    </div>
  )
}
