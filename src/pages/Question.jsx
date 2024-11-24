import React from 'react'
import ProgressBar from '../components/ProgressBar'
import QuestionContent from '../components/QuestionContent'

export default function Question() {
  return (
    <section className="question">
      <ProgressBar />
      <QuestionContent />
    </section>
  )
}
