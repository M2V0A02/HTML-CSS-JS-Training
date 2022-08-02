function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

myString = 'qwrasras'
myString = myString.split('')
myString[0] = 'w'
myString = myString.join('')
console.log(myString)