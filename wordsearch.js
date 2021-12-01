const wordSearch = (letters, word, callback) => { 
  
    if (letters.length < 1) {
      return undefined;
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  
    const verticalJoin = callback(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    return false;
  };
  
  
  const transpose = function(matrix) {
    let newArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let subArray = [];
      for (let j = 0; j < matrix.length; j++) {
        subArray.push(matrix[j][i]);
      }
      newArray.push(subArray);
    }
    return newArray;
  };
  
  module.exports = {
    wordSearch,
    transpose
  }
  