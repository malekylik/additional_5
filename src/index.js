module.exports = function check(str, bracketsConfig) {
  let leftBracket = [];
  let rightBracket = [];

  for(let i = 0; i < bracketsConfig.length;i++ ){
    leftBracket.push(bracketsConfig[i][0]);
    rightBracket.push(bracketsConfig[i][1]);
  }

  let stack = [];
  let answer = true;


  for(var i = 0; i < str.length;i++){
    if(!stack.length){
      stack.push(str[i]);
    }else{
      if(leftBracket.includes(str[i]) 
        && rightBracket[leftBracket.indexOf(str[i])] !== str[i]){
         stack.push(str[i]);
      }else{
        if(stack[stack.length - 1] === leftBracket[rightBracket.indexOf(str[i])]) stack.pop();
        else stack.push(str[i]);
      }
    }
  }

  if(stack.length)  answer = false;

    return answer;

}