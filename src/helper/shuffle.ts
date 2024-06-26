export function shuffleArray<T>(array: T[]): T[] {
  let shuffledArray = array.slice() // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]] // Swap elements
  }
  return shuffledArray
}
