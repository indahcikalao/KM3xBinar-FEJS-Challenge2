function getSplitName(personName){
    if(typeof personName == 'string'){
        
        const pisah = personName.split(' '),
        nama = ['firstName','middleName','lastName'],
        pjgPisah = pisah.length
        let obj = {}

        if (pjgPisah >= 1 && pjgPisah <= 3){

            for(let i = 0; i < pjgPisah; i++){

                if(i == 0 && i == (pjgPisah-1)){
                    obj[nama[i]] = pisah[i]
                    obj[nama[i+1]] = null
                    obj[nama[i+2]] = null
                }

                else if (i == 1 && i == (pjgPisah-1)){
                    obj[nama[i]] = null
                    obj[nama[i+1]] = pisah[i]        
                }

                else{
                    obj[nama[i]] = pisah[i]
                }
            }
            return obj
        } 
        else{
            return 'Error : This function is only for 3 words name'
        }
    }
    else{
        return 'Error : input is not a string'
    }
}


console.log(getSplitName('Aldi Daniela Pranata'));
console.log(getSplitName('Dwi Kuncara'));
console.log(getSplitName('Aurora'));
console.log(getSplitName('Aurora Aureliya Suma Darma'));
console.log(getSplitName(0));
