import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Question from '../pages/Question'
import QuestionLayout from '../layouts/QuestionLayout'
import Result from '../pages/Result'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<QuestionLayout />}>
          <Route path="/question/:id" element={<Question />} />
          <Route path="/result/:mbti" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
