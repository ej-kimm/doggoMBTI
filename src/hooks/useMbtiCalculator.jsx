import { useState } from 'react'

export default function useMbtiCalculator() {
  const [mbtiCounts, setMbtiCounts] = useState({
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  })

  const incrementMbtiCount = (type) => {
    setMbtiCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }))
  }

  const calculateMbtiResult = () => {
    const { I, E, S, N, T, F, P, J } = mbtiCounts
    const result =
      (I >= E ? 'I' : 'E') +
      (S >= N ? 'S' : 'N') +
      (T >= F ? 'T' : 'F') +
      (P >= J ? 'P' : 'J')
    return result
  }

  return { incrementMbtiCount, calculateMbtiResult }
}
