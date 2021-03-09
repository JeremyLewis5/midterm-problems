function isEvenlyDivisible(num1, num2) {
 // let output = '';
  // for (const number of arr) 
  if(num1 % num2 === 0 ){
    return true;
  } else {
    return false
  }
   
}

function halfSquare(num1) {
  let halfSquared = num1 * num1 / 2;
  if (halfSquare ) {
    return halfSquared
  } else {
    return false
  }

}

function isLong(str) {
  if (str.length >= 15) {
    return true
  } else {
    return false
  }
}

function exclaim(str) {
//   let output = '';
//   for (let i = str.length - 1; i < str.length; i--) {
//     const char = str[str.length - 1];
//     if (char === '') {
//     output =+ '!';
//     } else {
//       return output;
//     }
    
//   }
//   return output;
// }
let i;

  for (i = 0; i < str.length; i++) {
    str[i] = str[i] + '!';
  }

  return str[i];
}

function countWords(str) {
  return str.split(' ').length;
}

function containsDigit(str) {
  const isDigit = ['0', '1', '2', '3', '4', '5',
'6', '7', '8', '9']
  if (str === isDigit) {
    return true
  } else {return false}
  
}

function containsLowerCase(str) {
  const char = ['a','b','c','d','e','f','g','h','i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
  't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //const hasLow = char.toLowerCase();
  if (str === char ) {
    return true
  } else {
    return false
  }
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace(str) {
  const spaced = " ";
  if (str === spaced) {
    return true
  } else {
    return false
  }
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}