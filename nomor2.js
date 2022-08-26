
const checkTypeNumber = (givenNumber) =>{
    
    if(typeof givenNumber === 'number'){
        if(givenNumber === 0) {
            return 'ini nol'
        }
        
        else if(givenNumber % 2 === 0){
            return 'GENAP'
        }
        
        else{
            return 'GANJIL'
        }
    }

    else if (givenNumber === undefined) {
        return 'Error : Bro where is the parameter?'
    }

    else{
        return 'Error : Invalid Data Type'
    }

}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber('3'))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())

