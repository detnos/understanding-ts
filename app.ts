function combine(
    input1: number | string, 
    input2: number | string, 
    resultConversion: 'as-number' | 'as-text') 
    {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
      result = input1.toString() + input2.toString();
  }
  return result;
//   if (resultConversion === 'as-number') {
//       return +result;
//   } else {
//     return result.toString();
//   }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combinedStringAges = combine('30', '26', "as-number");
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-string');
console.log(combineNames);
