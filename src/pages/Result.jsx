import React from 'react'
import { useParams } from 'react-router-dom'

export default function Result() {
  const { mbti } = useParams()

  return <div>{mbti}</div>
}
