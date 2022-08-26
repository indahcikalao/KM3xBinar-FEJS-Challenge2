function getAngkaTerbesarKedua(arrayAngka) {
    if(Array.isArray(arrayAngka)) {
        let max=-Infinity, 
            maxKedua = -Infinity

        for (m = 0; m <= arrayAngka.length; m++) {
            if(typeof arrayAngka[m] != 'number'){
                return 'Error : Value of the Array is not a number'
            }
            else if (m > max){
                max = m
            }
            
        }
    
        for  (n = 0; n <= arrayAngka.length; n++) {
            if(n > maxKedua && n < max){
                maxKedua = n
            }
        }
    
        return maxKedua
    }
    else{
        return 'Error : Parameter is not Iterable'
    }
    
}
  
const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(2))
console.log(getAngkaTerbesarKedua())
console.log(getAngkaTerbesarKedua([1, '3']))
