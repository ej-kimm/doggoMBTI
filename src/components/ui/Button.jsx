import React from 'react'

export default function Button({ answer, onClick }) {
  return (
    <button className="answer-btn" type="button" onClick={onClick}>
      {answer}
    </button>
  )
}
