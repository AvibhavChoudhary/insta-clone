export const shuffleArray = (array: [any]) => {
  let currentIndex = array.length;
  let randomIndex, tempValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
};
