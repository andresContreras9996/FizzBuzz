const checkBackground=(number)=>{
  if(number%3===0&&number%5===0)return 'green-background';
  if(number%3===0)return 'red-background';
  if(number%5===0)return 'yellow-background';
  return 'undefined-background';
}
const getWord=(number)=>{
  if(number%3===0&&number%5===0)return 'Fizz Buzz';
  if(number%3===0)return 'Fizz';
  if(number%5===0)return 'Buzz';
  return 'No match';
}
export {checkBackground,getWord}