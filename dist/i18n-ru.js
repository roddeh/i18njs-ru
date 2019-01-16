'use strict'

function getPluralisationKey(num) {
  if (!num) {
    return 'zero'
  }
  if (num % 10 == 1 && num % 100 != 11) {
    return 'one'
  }
  if ([2, 3, 4].indexOf(num % 10) >= 0 && [12, 13, 14].indexOf(num % 100) < 0) {
    return 'few'
  }
  if (num % 10 == 0 || [5, 6, 7, 8, 9].indexOf(num % 10) >= 0 || [11, 12, 13, 14].indexOf(num % 100) >= 0) {
    return 'many'
  }
  return 'other'
}

function russian(text, num, formatting, data){
  let key = getPluralisationKey(num)
  return data[key]
}

module.exports = russian
