// You are given a string stored in a variable with the namestr

// The length of the string is stored in a variable with the nameN

// You have to calculate the power of the string

// The power of the string is given by the formula :5*x + 7*y, wherexis the number of vowels in the string, whileyis the number of consonants

// For example, consider the value stored inN = 6, andstr = ankush. Therefore, the number of vowels = 2, and consonants = 4

// Therefore, the value of the equation becomes :5*2 + 7*4 = 38. Therefore, the required output is38


function strPowerCalc(N, str){
	
    count = 0
    count1 = 0
for(i=0; i<str.length; i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){

        count++
    }else{
        count1++
    }
}
console.log(5*count+7*count1);
}
