export function getRandomlyChangedValuesArray(basicArray) {
  return basicArray.map(obj => {
    if (Math.round(Math.random())) {
      return {
        label: Math.random(),
        val: parseInt(Math.random() * 100 + 10, 10)
      };
    }
    return Object.assign({}, obj, { val: obj.val + Math.random() * 1000 });
  });
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
