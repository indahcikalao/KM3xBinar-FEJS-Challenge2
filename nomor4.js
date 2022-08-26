function isValidPassword(pw){
  if (typeof pw == 'undefined') {
    return "Error : input doesn't have parameter"
  }

  else if(pw.length >= 8){

    let character='',
        num=false,
        up=false,
        low=false
  
    for( i = 0; i <= pw.length; i++){
      character = pw.charAt(i);
      if (!isNaN(character)){
        num = true
      }
      else if (character == character.toUpperCase()) {
        up = true
      }
      else if (character == character.toLowerCase()){
        low = true
      }
    }
  
    if (num == true && up == true && low == true){
      return true
    }
    else{
      return false
    }

  } 

  else if(pw.length < 8){
    return false
  } 

  else if(typeof pw != 'string'){
    return 'Error : invalid data type! input is not a string!'
  }
  
}

console.log(isValidPassword('Meong2021'))
console.log(isValidPassword('meong2021'))
console.log(isValidPassword('@eong'))
console.log(isValidPassword('Meong2'))
console.log(isValidPassword(0))
console.log(isValidPassword())