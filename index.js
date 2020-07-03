function breakOut(array, changeValue, stopValue){

}

function keepGoing(array, changeValue, skipValue){

}

function findBy(array, findFn){

for (let i = 0 ; i < array.length ; i++){
  if (findFn(array[i])){
    return array[i]
  }
}
return null
}
