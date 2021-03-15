module.exports = function toReadable (number) {
  let num = require('num-words');
  let readableNum = num(number);
  let finalReadableNum='';
  let readableNumArr = readableNum.split(' ');
  for(let i =0; i<readableNumArr.length;i++){
      if(readableNumArr[i]!='and'){
          if(i!=readableNumArr.length-1) {
              finalReadableNum = finalReadableNum + readableNumArr[i] + ' ';
          } else{
              finalReadableNum = finalReadableNum + readableNumArr[i];
          }

      } else {
          readableNumArr.splice(i,0);
      }
  }

  return finalReadableNum;
}
