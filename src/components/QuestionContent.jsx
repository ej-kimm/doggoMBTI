import React from 'react'
import Button from './ui/Button'

export default function QuestionContent({ question, options, onAnswer }) {
  return (
    <div className="question-content">
      <h3 className="title">{question}</h3>
      {/* <div className="character"></div> */}
      <div className="button-wrapper">
        {options.map((option, index) => (
          <Button key={index} answer={option.answer} onClick={onAnswer} />
        ))}
      </div>
    </div>
  )
}
