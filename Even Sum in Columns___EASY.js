// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// For all columns, you have to print the sum of even elements present in the column

// For example, consider the value stored inN = 3,M = 3, and the array isarr = [1,2,3],[4,5,6],[7,8,9], then the required output will be

// 4  (Even numbers in the column are, [4]. Therefore, the sum becomes 4)
// 10 (Even numbers in the row are, [2,8]. Therefore, the sum becomes 10) 
// 6  (Even numbers in the row are, [6]. Therefore, the sum becomes 6)


function evenSumColumns(N,M,arr){
    
    for(j=0; j<M; j++){
        let sum = 0    
        let bag = ""
        for(i=0; i<N; i++){
            if(arr[i][j]%2===0){
                sum = sum + arr[i][j]
            }
        }
           console.log(sum); 
    }
    
}