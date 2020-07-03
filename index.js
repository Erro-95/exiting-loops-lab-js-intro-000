function breakOut(array, changeValue, stopValue){

}

function keepGoing(array, changeValue, skipValue){

  array.forEach((element, index) => {
    if (element === skipValue){
      return
    }
    array[i] = changeValue
  })
  return array
}

function findBy(array, findFn){

for (let i = 0 ; i < array.length ; i++){
  if (findFn(array[i])){
    return array[i]
  }
}
return null
}
