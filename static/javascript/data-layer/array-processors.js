export function getRandomlyChangedArray(basicArray) {
  return basicArray.filter(() => Math.round(Math.random()));
}

export function generateArray(size = 10) {
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push({
      val: parseInt(Math.random() * 100 + 10, 10),
      label: `Label ${String.fromCharCode(65 + i)}`
    });
  }
  return result;
}
