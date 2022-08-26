function checkEmail(email) {
    
  let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/g
  let reg = /^\w+([\.-]?\w+){2,}$/

  if (regex.test(email)) {
    return 'valid'
  } 
  else if (email === undefined){
    return "Error : input dosen't have parameter"
  }
  else if(reg.test(email)) {
    return "Error : input doesn't have @ nor .com nor .co.id"
  }
  else{
    return 'invalid'
  }

}

console.log(checkEmail('asdfghi@binar.com'))
console.log(checkEmail('asdfghi@binar.co.id'))
console.log(checkEmail('asdfghi@binar'))
console.log(checkEmail('asdfghi'))
console.log(checkEmail( ))





